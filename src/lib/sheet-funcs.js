import * as persistence from './persistence';

export function UserValue([doc, field]) {
  persistence.getUserValue(doc, field);
}
