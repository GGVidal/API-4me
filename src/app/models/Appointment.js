import Sequelize, { Model } from 'sequelize';
import User from './User';

class Appointment extends Model {
    static init(sequelize) {
        super.init(
            {
                date: Sequelize.DATE, // campos nao primary key e nem created ou updated at
                canceled_at: Sequelize.DATE,
            },
            {
                sequelize,
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }); // obrigado a dar um alias
        this.belongsTo(models.User, {
            foreignKey: 'provider_id',
            as: 'provider',
        });
    }
}

export default Appointment;
