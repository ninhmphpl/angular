import {User} from "./User";

export class Project{
  projectId! : string;
  /**
   * Project name of project
   */
  projectName! : string;
  /**
   * Secret key of project's token
   */
  direction ! : string
  secretKey! : string;
  /**
   * History action user uses token
   */
  history! : History[]
  /**
   * Users can uses project
   */
  users! : User[];
}
