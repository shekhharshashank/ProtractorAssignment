import { browser} from 'protractor';
describe('Browser API Demo', () => {
 it('Get client session details', () => {
 browser.get('https://material.angularjs.org')
 .then(() => (browser.getSession()))
                .then((session)=>((console.log(session.getId))));
 });
});