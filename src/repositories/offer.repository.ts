import {
  getFirstRecordBy,
  create as createRecord,
  getOne as getOneRecord,
  deleteRecord,
} from './commom.repository';
import offerModel from '../database/models/offer.model'

const tableName = 'offers'
const primaryColumn = 'id'

const create = async (data: IOffer) => createRecord(tableName, data)

const edit = async ({id, data}: { id: number, data: IOffer }) => 
  await offerModel.query()
    .findById(id)
    //@ts-ignore
    .patch(data);

const remove = async (id: number) => deleteRecord(tableName, primaryColumn, id)

const getRecordBy = async (column: string, value: string | number) =>
  getFirstRecordBy(tableName, column, value)

const getOne = async (id: string | number) =>
  getOneRecord(tableName, primaryColumn, id)

const getAllRecords = async () => 
  await offerModel.query()

export {
  create,
  edit,
  remove,
  getOne,
  getAllRecords,
  getRecordBy,
}

