class BaseController {
    constructor(ModelClass) {
        this.model = new ModelClass();
        console.log(this.model.findAll)
    }

    async getAll(req, res) {
        try {
            const data = await this.model.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const data = await this.model.findById(req.params.id);
            if (!data) return res.status(404).json({ error: 'Not found' });
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const id = await this.model.create(req.body);
            res.status(201).json({ id });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async update(req, res) {
        try {
            await this.model.update(req.params.id, req.body);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await this.model.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = BaseController;
