// File: Collection.js
class Collection {
    constructor(model) {
      this.model = model;
    }
  
    async create(data) {
      try {
        const createdRecord = await this.model.create(data);
        return createdRecord;
      } catch (error) {
        console.error('Error occurred while creating record:', error);
        throw error;
      }
    }
  
    async read() {
      try {
        const records = await this.model.findAll();
        return records;
      } catch (error) {
        console.error('Error occurred while retrieving records:', error);
        throw error;
      }
    }
  
    async update(id, data) {
      try {
        const updatedRecord = await this.model.update(data, {
          where: { id },
        });
        return updatedRecord;
      } catch (error) {
        console.error('Error occurred while updating record:', error);
        throw error;
      }
    }
  
    async delete(id) {
      try {
        if  ( await this.read(id)){
          const deletedRecord = await this.model.destroy({
            where: { id },
          });
        
          return deletedRecord;
        }
        else{
          throw new Error('Error occurred while deleting record')
        }
        
      } catch (error) {
        console.log( error);
        return error;
        //throw error;
      }
    }

    async readFoodIngredient(id, model) {
      try {
        const records = await this.model.findOne({
          where: { id },
          include: model
        });
        return records;
      } catch (error) {
        console.error('Error occurred while retrieving records:', error);
        throw error;
      }
    }
  }
  
  module.exports = Collection;
  