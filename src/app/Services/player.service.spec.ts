import { async, ComponentFixture, TestBed,getTestBed } from '@angular/core/testing';
import {  inject } from '@angular/core/testing';
import { PlayerService } from './player.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockBackend } from '@angular/http/testing'
import {Player} from '../Models/Player';



describe('PlayerService', () => {

   let httpMock: HttpTestingController;
   let injector: TestBed;
   let service: PlayerService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,HttpClientTestingModule],
      providers: [PlayerService]
    });
    injector = getTestBed();
    service = injector.get(PlayerService);
    httpMock = injector.get(HttpTestingController);
  }));

   afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
    httpMock.verify();
}));


  it('should be created', () => {
    const service: PlayerService = TestBed.get(PlayerService);
    expect(service).toBeTruthy();
  });

  it(`verify get players Request `,
     async(
       inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
         http.get('//localhost:8080/player').subscribe();
         backend.expectOne({
           url: '//localhost:8080/player',
           method: 'GET'
         });
       })
)
);


it('should return the right number of added players Observable<Player[]>', () => {
const playerss =[{"firstName":"8","lastName":"10","phone":"984","natIdNum":"13","address":"4","mailAddress":"12","height":9.0,"weight":66.0,"birthdate":"5","nationality":"456","photoUrl":"948","region":"65413","city":"84651","numpasseport":"65494","comment":"654849","id":1,"licenseNumber":"11","squadNumber":44,"actualTeamId":3,"previousTeamId":465,"category":"67"},{"firstName":"8","lastName":"10","phone":null,"natIdNum":null,"address":"5","mailAddress":null,"height":9.0,"weight":45.0,"birthdate":"6","nationality":null,"photoUrl":null,"region":null,"city":null,"numpasseport":null,"comment":null,"id":666,"licenseNumber":"11","squadNumber":0,"actualTeamId":4,"previousTeamId":0,"category":"7"},{"firstName":null,"lastName":null,"phone":null,"natIdNum":null,"address":"qsfsf","mailAddress":null,"height":0.0,"weight":0.0,"birthdate":"45/116","nationality":null,"photoUrl":null,"region":null,"city":null,"numpasseport":null,"comment":null,"id":66,"licenseNumber":null,"squadNumber":0,"actualTeamId":4,"previousTeamId":0,"category":null},{"firstName":"Firas","lastName":"Bc","phone":"28289788","natIdNum":"123","address":"465","mailAddress":null,"height":0.0,"weight":0.0,"birthdate":null,"nationality":null,"photoUrl":null,"region":null,"city":null,"numpasseport":null,"comment":null,"id":7,"licenseNumber":null,"squadNumber":0,"actualTeamId":0,"previousTeamId":0,"category":null},{"firstName":null,"lastName":null,"phone":null,"natIdNum":null,"address":null,"mailAddress":null,"height":0.0,"weight":0.0,"birthdate":null,"nationality":null,"photoUrl":null,"region":null,"city":null,"numpasseport":null,"comment":null,"id":9,"licenseNumber":null,"squadNumber":0,"actualTeamId":0,"previousTeamId":0,"category":null}]
service.getPlayers().subscribe(players => {
expect(players.length).toBe(5);
//expect(players).toEqual(playerss);
});

const req = httpMock.expectOne(`//localhost:8080/player`);
expect(req.request.method).toBe("GET");

//expect(req.)
req.flush(playerss);
});

});
