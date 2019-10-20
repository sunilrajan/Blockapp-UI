export default {
    async getClientData() {
        const response = await fetch("http://localhost/bloc/v2.2/contracts/ClientData/0aa4597e96352f6a03797df16f1bd3c6671e2a2b/state?length=false");
        const data = response.json();
        return data;
    }
}