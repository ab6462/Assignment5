const Item = require('./model');

const queries = {
    getAllItems: async function (filter) {
        const items = await Item.find(filter);
        return items;
    },
    getOneItem: async function (filter) {
        const item = await Item.findOne(filter);
        return item;
    },
    deleteOneItem: async function (id) {
        // console.log(id);
        const items = await Item.findByIdAndDelete(id);
        return items;
    },
    insertOneItem: async function (filter) {
        const items = await Item.create(filter);
        return items;
    }
}

module.exports = queries;