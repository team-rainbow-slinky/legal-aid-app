import Org from '../src/models/Org';
import User from '../src/models/User';
import {
  org1, org1User1, org1User2,
  org2, org2User1, org2User2
} from './initialData';

export default async function generateInitialData() {

  let orgs;
  orgs = await Org.create(
    org1,
    org2
  );
  await User.create(
    { ...org1User1, org: orgs[0] },
    { ...org1User2, org: orgs[0] }
  );
  await User.create(
    { ...org2User1, org: orgs[1] },
    { ...org2User2, org: orgs[1] }
  );

}
