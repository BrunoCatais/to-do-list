import instance from '@/commons/plugins/axios'

class dbClient {
    async findListas() {
        return (await instance.get(`/api/listas`)).data
    }

    async deleteLista(id) {
        return instance.delete(`/api/listas/${id}`)
    }

    async insertLista(nome, descricao) {
        let lista = {
            nome: nome,
            descricao: descricao
        }
        return await instance.post(`/api/listas`, lista)
    }
}

export default new dbClient()