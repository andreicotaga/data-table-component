<template>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Description</th>
        <th>Date</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="payment in payments" v-bind:key="payment.id">
        <td>{{ payment.Id }}</td>
        <td>{{ payment.Name }}</td>
        <td>{{ payment.Description }}</td>
        <td>{{ payment.Date }}</td>
        <td>{{ payment.Amount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
    import store from '../../store'

    export default {
        name: 'Payments',
        data() {
            return {
                payments: []
            }
        },
        mounted() {
            this.getPayments();
        },
        methods: {
            getPayments() {
                var self = this;

                this.$store.dispatch('getPayments')
                    .then(function()
                    {
                        self.payments = store.state.payments;
                    });
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
