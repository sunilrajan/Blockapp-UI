<template>

  <v-card>
    <div id="managerdata">
    <v-card-title>
      <b>CLIENT DATA</b>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table 
      :headers="headers"
      :items="desserts"
      :search="search"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
         <td class="text-xs-right">{{ props.item.ClientName }}</td>
        <td class="text-xs-right">{{ props.item.contact }}</td>
        
      </template>
      <v-alert v-slot:no-results :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
    </div>
  </v-card>
  
</template>
<script>
  import ClientAPI from "@/API/ClientData";

  export default {
   created() {
        ClientAPI.getClientData().then(data => {
          this.desserts = data.clients.map((client,i) => {
            return {
              name: i + 1,
              ClientName: client.name,
              Budget: client.estimatedBudget,
              acctno: client.accountNumber,
              contact: client.contact
            }
          })
        });
      },
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
         { text: 'ClientName', value: 'ClientName' },
          { text: 'ContactDetails', value: 'contact' }
           

        ],
        desserts: [
          // {
          //   name: '1',
          //   ClientName: 'Mr.Kevin Wayne',
          //   AssignedDate: '3.01.2019',
          //   submission: '3.01.2019',
          //   contact: +917363833839,
            
          // },
          // {
          //  name: '2',
          //   ClientName: 'Mr.bruce Wayne',
          //   AssignedDate: '5.01.2019',
          //   submission: '23.01.2019',
          //   contact: +917363833839,
           
          // },
          // {
          //  name: '3',
          //   ClientName: 'Mr.stuart',
          //   AssignedDate: '6.01.2019',
          //   submission: '30.01.2019',
          //   contact: +917363833839,
            
          // },
          // {
          //   name: '4',
          //   ClientName: 'Mr.holt',
          //   AssignedDate: '3.01.2019',
          //   submission: '21.01.2019',
          //   contact: +917363833839,
            
          // },
          // {
          //   name: '5',
          //   ClientName: 'Mr.Adam',
          //   AssignedDate: '3.02.2019',
          //   submission: '5.02.2019',
          //   contact: +917363833839,
            
          // },
          // {
          //   name: '6',
          //   ClientName: 'Mr.robert Wayne',
          //   AssignedDate: '23.01.2019',
          //   submission: '3.02.2019',
          //   contact: +917363833839,
           
          // },
          // {
          //   name: '7',
          //   ClientName: 'Mrs.Amy',
          //   AssignedDate: '12.01.2019',
          //   submission: '15.01.2019',
          //   contact: +917363833839,
           
          // },
          // {
          //   name: '8',
          //   ClientName: 'Mr.peter',
          //   AssignedDate: '12.01.2019',
          //   submission: '13.01.2019',
          //   contact: +917363833839,
            
          // },
          // {
          //   name: '9',
          //   ClientName: 'Mr.steven',
          //   AssignedDate: '16.01.2019',
          //   submission: '20.01.2019',
          //   contact: +917363833839,
            
          // },
          // {
          //  name: '10',
          //   ClientName: 'Mr.charles',
          //   AssignedDate: '13.01.2019',
          //   submission: '23.01.2019',
          //   contact: +917363833839,
            
          // }
        ]
      }
    }
  }
</script>
<style scoped>
#managerdata
{
  background-color:whitesmoke;
  
}
</style>