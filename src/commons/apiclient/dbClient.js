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

    async findTarefasByListaId(listaId) {
        return (await instance.get(`/api/tarefas/${listaId}`)).data
    }

    async deleteTarefaByTarefaAndListaId(tarefaId, listaId) {
        return instance.delete(`/api/listas/${listaId}/tarefas/${tarefaId}`)
    }

    async insertTarefas(listaId, nome, data, etiqueta, descricao) {
        let tarefa = {
            listaId: listaId,
            nome: nome,
            descricao: descricao,
            data: data,
            etiqueta: etiqueta
        }
        console.log(tarefa)
        return await instance.post(`/api/tarefas`, tarefa)
    }
}

export default new dbClient()