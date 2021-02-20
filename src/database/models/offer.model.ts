import Model from '../utils/model';

class Offer extends Model {
  static get modelPaths() {
    return [__dirname];
  }

  static get tableName() {
    return 'offers';
  }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        advertiser_name: { type: 'string', minLength: 1, maxLength: 255 },
        url: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 500 },
        starts_at: { type: 'timestamp' },
        ends_at: { type: 'timestamp' },
        premium: { type: 'boolean' },
        disabled_by_user: { type: 'boolean' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
      },
    };
  }
}

export default Offer;