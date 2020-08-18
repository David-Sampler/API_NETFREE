let video = require('../schemas/schemaVideo')

module.exports = {

    allVideos: async (req, res) => {

        let videos = await video.find()
        return res.json(videos)

    },

    insertVideo: async (req, res) => {
        const { nome, genero, linguagem, detalhes, url, ano } = req.body

        try {

            await new video({
                nome,
                genero,
                linguagem,
                detalhes,
                url,
                ano,
                criado: new Date().toDateString()

            }).save()


        } catch (error) {
            console.log(error)
        }

        res.json('Cadastro realizado com sucess')

    }

}