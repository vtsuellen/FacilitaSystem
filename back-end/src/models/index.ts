import { Sequelize } from "sequelize";
import * as config  from "../database/config";

const sequelize = new Sequelize(config);
export default sequelize;