// File: Collection.js

// Creates a class to make new instances for each model, that has methods to perform CRUD.
class Collection {
    constructor(model) {
      this.model = model;
    }
    
    // POST create new clothes
    async create(data) {
      try {
        const createdRecord = await this.model.create(data);
        return createdRecord;
      } catch (error) {
        console.error('Error occurred while creating record:', error);
        throw error;
      }
    }

  // GET all clothes && one Cloth
    async read() {
      try {
        const records = await this.model.findAll();
        return records;
      } catch (error) {
        console.error('Error occurred while retrieving records:', error);
        throw error;
      }
    }

  // PUT update existing clothes by ID
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

  // DELETE delete clothes by ID
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

    // GET Relational Tables of food and ingredient
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
  