import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  inject } from '@angular/core/testing';
import { PlayerService } from './player.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockBackend } from '@angular/http/testing'



describe('PlayerService', () => {
  const items =
              [{
                "id":"1",
                "licenseNumber": "string",
                "firstName": "string",
                "lastName": "string",
                "squadNumber": "number",
                "natIdNum": "string",
                "address": "string",
                "phone": "string",
                "mailAddress": "string",
                "height": "number",
                "weight": "number",
                "birthdate": "string",
                "actualTeamId": "number",
                "previousTeamId": "number",
                "nationality": "string",
                "category": "string",
                "photoUrl": "string",        }];
  const item =
              {
                              "id":"1",
                              "licenseNumber": "string",
                              "firstName": "string",
                              "lastName": "string",
                              "squadNumber": "number",
                              "natIdNum": "string",
                              "address": "string",
                              "phone": "string",
                              "mailAddress": "string",
                              "height": "number",
                              "weight": "number",
                              "birthdate": "string",
                              "actualTeamId": "number",
                              "previousTeamId": "number",
                              "nationality": "string",
                              "category": "string",
                              "photoUrl": "string",       };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,HttpClientTestingModule],
      providers: [PlayerService]
    });

  }));

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
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
/*
it(`verify get players empplty `,
async(
inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
let service : PlayerService;
service = new PlayerService (http);
service.addPlayer(item)
expect(service.getPlayers()).toEqual(items);
})
)
);

*/


/*it(`verify get player `,
async(
inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
http.get('//localhost:8080/player').subscribe();
backend.expectOne({
url: '//localhost:8080/player/1',
method: 'GET'
});
})
)
);*/



});
