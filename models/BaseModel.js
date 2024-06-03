class BaseModel {
    constructor(model) {
        this.model = model;
        console.log(this.model.findAll)
    }

    async findAll() {
        console.log('hehehheh')
        return this.model.findAll();
    }

    async findById(id) {
        return this.model.findByPk(id);
    }

    async findOne(args){
        return this.model.findOne(args)
    }

    async create(data) {
        const instance = await this.model.create(data);
        return instance.id;
    }

    async update(id, data) {
        await this.model.update(data, {
            where: { id }
        });
    }

    async delete(id) {
        await this.model.destroy({
            where: { id }
        });
    }
}

module.exports = BaseModel;
