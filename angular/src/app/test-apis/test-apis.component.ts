import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-apis',
  templateUrl: './test-apis.component.html',
  styleUrls: ['./test-apis.component.css']
})
export class TestApisComponent implements OnInit {
   constructor(public http:HttpClient) {}
    ngOnInit() {
      console.log("Started");
      
  }
   /*
    iapi(){
      console.log("In iapi function");
      //this.http.get('https://iapi.dev.devopscircuit.in/api/ResourceConfiguration')
      //this.http.get('https://iapi.dev.devopscircuit.in/api/Login',{headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IjM4N3IxLTlYUGtoLTVHZDhmanBTTlBoYjVsWkg4cWxYSVhGVFAtSndWWUUiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUxYjI3Zi0zOTAwLTQ2ZjMtYjIwOC1hOGI2NmRmNTMxZTMvIiwiaWF0IjoxNjg2MjgxOTU5LCJuYmYiOjE2ODYyODE5NTksImV4cCI6MTY4NjI4NjAyNywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQVBNeUVvYjc2Y3Blckd1T2xjV2R2dytVZjJzem9iUmtibitzcWNDYk1jOU5MeHpIeXB4YWIzM2ZPZGp2VUNvdDZOZ1JwZkovUHo1blNNVE9kYURwUk9PTXhFdjRPUzVHZ3Q5Qk1XcnFKR0NJPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiQXBwLUZvci1VbmltYXRyaXgiLCJhcHBpZCI6IjNjMjE1ZDllLWM5NDYtNDJkMS1iMzYzLTQ5YjZiZmNmMTQzNyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQWNoYXJ5YSIsImdpdmVuX25hbWUiOiJTYWhhbmEiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxMzYuMjI2LjI1Mi4xMjAiLCJuYW1lIjoiU2FoYW5hIEFjaGFyeWEiLCJvaWQiOiJhZDhiODI4Ny1lNjNhLTQ4ZWYtOTk0ZS0wYTZhNDEyYzVmZWIiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDFBOUVGMDU5RCIsInJoIjoiMC5BUXdBZjdKUkxBQTU4MGF5Q0tpMmJmVXg0d01BQUFBQUFBQUF3QUFBQUFBQUFBQ1dBR3cuIiwic2NwIjoiTWFpbC5SZWFkIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBVc2VyLlJlYWRCYXNpYy5BbGwgZW1haWwiLCJzdWIiOiI2bUg4Z1pTck0tSXNwU3JoUWhYYlFkclNPejE0VTVtYzVQSGZXckw2STh3IiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkVVIiwidGlkIjoiMmM1MWIyN2YtMzkwMC00NmYzLWIyMDgtYThiNjZkZjUzMWUzIiwidW5pcXVlX25hbWUiOiJzYWhhbmEuYWNoYXJ5YUBhbHBpY2xvdWQub25taWNyb3NvZnQuY29tIiwidXBuIjoic2FoYW5hLmFjaGFyeWFAYWxwaWNsb3VkLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6InlBZ1NpNFVMeTBhNWVHQXg5X3NWQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjliODk1ZDkyLTJjZDMtNDRjNy05ZDAyLWE2YWMyZDVlYTVjMyIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiQ0dQTmRwbERaNTFjSTlLSmw2dUNLVDV4bXo4U0lma2lsQWo3RThRbDdTRSJ9LCJ4bXNfdGNkdCI6MTYzMDUwMTEyMiwieG1zX3RkYnIiOiJFVSJ9.d50E65BQL9ZXK-ly_1eMMi8-bOFPtBM_dQGmYUGqJi3obGFBlEtJJICCd3eOYxvH0S1mGoGUSfhj1ycrz4PCc1-LI9RmphKYZUlANsfN5x6w9KDtvGgTwGbLlkCGTJjJLNfaUZYO5Hov1VDK9ObqCpZ2UHRTuByI_tdWiW2zxtk2rLWAVw6ARO4bjZa2sljFDVPLVAYjCMXnrf43EI9HOUOLKmwUCrL6AckDruqUTDd44I3Me8Hn9eKVhV91Ks9A9DNiz_LcqkpD7p1toWMnOLCFToWsTSFzWpkobnjnppfJYkTJV8LYw0XRBrUEfsgmlKL7UvxVktS0vGePBdKc9g'}})
      this.http.get('https://unimatrix.qa.devopscircuit.in/iapi/api/Login',{headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IjM4N3IxLTlYUGtoLTVHZDhmanBTTlBoYjVsWkg4cWxYSVhGVFAtSndWWUUiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUxYjI3Zi0zOTAwLTQ2ZjMtYjIwOC1hOGI2NmRmNTMxZTMvIiwiaWF0IjoxNjg2MjgxOTU5LCJuYmYiOjE2ODYyODE5NTksImV4cCI6MTY4NjI4NjAyNywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQVBNeUVvYjc2Y3Blckd1T2xjV2R2dytVZjJzem9iUmtibitzcWNDYk1jOU5MeHpIeXB4YWIzM2ZPZGp2VUNvdDZOZ1JwZkovUHo1blNNVE9kYURwUk9PTXhFdjRPUzVHZ3Q5Qk1XcnFKR0NJPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiQXBwLUZvci1VbmltYXRyaXgiLCJhcHBpZCI6IjNjMjE1ZDllLWM5NDYtNDJkMS1iMzYzLTQ5YjZiZmNmMTQzNyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQWNoYXJ5YSIsImdpdmVuX25hbWUiOiJTYWhhbmEiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxMzYuMjI2LjI1Mi4xMjAiLCJuYW1lIjoiU2FoYW5hIEFjaGFyeWEiLCJvaWQiOiJhZDhiODI4Ny1lNjNhLTQ4ZWYtOTk0ZS0wYTZhNDEyYzVmZWIiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDFBOUVGMDU5RCIsInJoIjoiMC5BUXdBZjdKUkxBQTU4MGF5Q0tpMmJmVXg0d01BQUFBQUFBQUF3QUFBQUFBQUFBQ1dBR3cuIiwic2NwIjoiTWFpbC5SZWFkIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBVc2VyLlJlYWRCYXNpYy5BbGwgZW1haWwiLCJzdWIiOiI2bUg4Z1pTck0tSXNwU3JoUWhYYlFkclNPejE0VTVtYzVQSGZXckw2STh3IiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkVVIiwidGlkIjoiMmM1MWIyN2YtMzkwMC00NmYzLWIyMDgtYThiNjZkZjUzMWUzIiwidW5pcXVlX25hbWUiOiJzYWhhbmEuYWNoYXJ5YUBhbHBpY2xvdWQub25taWNyb3NvZnQuY29tIiwidXBuIjoic2FoYW5hLmFjaGFyeWFAYWxwaWNsb3VkLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6InlBZ1NpNFVMeTBhNWVHQXg5X3NWQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjliODk1ZDkyLTJjZDMtNDRjNy05ZDAyLWE2YWMyZDVlYTVjMyIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiQ0dQTmRwbERaNTFjSTlLSmw2dUNLVDV4bXo4U0lma2lsQWo3RThRbDdTRSJ9LCJ4bXNfdGNkdCI6MTYzMDUwMTEyMiwieG1zX3RkYnIiOiJFVSJ9.d50E65BQL9ZXK-ly_1eMMi8-bOFPtBM_dQGmYUGqJi3obGFBlEtJJICCd3eOYxvH0S1mGoGUSfhj1ycrz4PCc1-LI9RmphKYZUlANsfN5x6w9KDtvGgTwGbLlkCGTJjJLNfaUZYO5Hov1VDK9ObqCpZ2UHRTuByI_tdWiW2zxtk2rLWAVw6ARO4bjZa2sljFDVPLVAYjCMXnrf43EI9HOUOLKmwUCrL6AckDruqUTDd44I3Me8Hn9eKVhV91Ks9A9DNiz_LcqkpD7p1toWMnOLCFToWsTSFzWpkobnjnppfJYkTJV8LYw0XRBrUEfsgmlKL7UvxVktS0vGePBdKc9g'}})
      .subscribe((data)=>{
        console.log(data)
      })
    }

    apim(){
      console.log("In apim function");
      this.http.get('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/ResourceConfiguration')
      //this.http.get('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/Login',{headers: {'Authorization':'eyJ0eXAiOiJKV1QiLCJub25jZSI6IlFrZlR0LXFBZlhqQ1IzdUFVWmhSYWZWVTZEU29oVW92YUNnSWljT0NUZmMiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUxYjI3Zi0zOTAwLTQ2ZjMtYjIwOC1hOGI2NmRmNTMxZTMvIiwiaWF0IjoxNjg2Mjg3MDQ1LCJuYmYiOjE2ODYyODcwNDUsImV4cCI6MTY4NjI5MTkzOSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQXIrOEhvNTZYN3h1czMzYlIvMFlhZFljYU03aVFaTTBFM1ZJS3JoNlk5MEZBSGV5WkZhbFI4bXlYZm5pd1FBYU9MZjZuKzRrd25NaWFCUXVFSUN0ZHJpTDB6SFRaWkNxajZ1WXhTNU12V2g4PSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiQXBwLUZvci1VbmltYXRyaXgiLCJhcHBpZCI6IjNjMjE1ZDllLWM5NDYtNDJkMS1iMzYzLTQ5YjZiZmNmMTQzNyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQWNoYXJ5YSIsImdpdmVuX25hbWUiOiJTYWhhbmEiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxMzYuMjI2LjI1Mi4xMjAiLCJuYW1lIjoiU2FoYW5hIEFjaGFyeWEiLCJvaWQiOiJhZDhiODI4Ny1lNjNhLTQ4ZWYtOTk0ZS0wYTZhNDEyYzVmZWIiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDFBOUVGMDU5RCIsInJoIjoiMC5BUXdBZjdKUkxBQTU4MGF5Q0tpMmJmVXg0d01BQUFBQUFBQUF3QUFBQUFBQUFBQ1dBR3cuIiwic2NwIjoiTWFpbC5SZWFkIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBVc2VyLlJlYWRCYXNpYy5BbGwgZW1haWwiLCJzdWIiOiI2bUg4Z1pTck0tSXNwU3JoUWhYYlFkclNPejE0VTVtYzVQSGZXckw2STh3IiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkVVIiwidGlkIjoiMmM1MWIyN2YtMzkwMC00NmYzLWIyMDgtYThiNjZkZjUzMWUzIiwidW5pcXVlX25hbWUiOiJzYWhhbmEuYWNoYXJ5YUBhbHBpY2xvdWQub25taWNyb3NvZnQuY29tIiwidXBuIjoic2FoYW5hLmFjaGFyeWFAYWxwaWNsb3VkLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IkdkSmRPdmdXQ1VhZW9naUFkLVFFQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjliODk1ZDkyLTJjZDMtNDRjNy05ZDAyLWE2YWMyZDVlYTVjMyIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiQ0dQTmRwbERaNTFjSTlLSmw2dUNLVDV4bXo4U0lma2lsQWo3RThRbDdTRSJ9LCJ4bXNfdGNkdCI6MTYzMDUwMTEyMiwieG1zX3RkYnIiOiJFVSJ9.oZGMHaII6RkXFthQyr0POSwy7wyJ0SwaIKHdY2Hrx8b7YhZYsNdyZbYzx-k6XUA-hlrXKeESu1xQjp6Vz72XoJ_R-9F7jRk_sKAyYqSe5PH66p31zhE1qioXYAWlEAvSe9LnTHZkyvERZDLWcOtBzw8Qepn9QvqsRti2QTbXY734t8O6-CHbzInILYdZRa28t-HoKYMfv3WO9oOfhVGQesoNyh7ZpRfJCtdZiRZxpsSFyIKch_XeSSSD6t_zb_0qoqGAlzXe5Fcd46vgskjvwwXZ16la6YvAnp1pG0iWbD7B_CHAW9mnWNx4bFfqNZbBAUSaQ0qk5YSNcSL-ol4l9g'}})
      .subscribe((data)=>{
        console.log(data)
      })
    }  
    qa(){
      console.log("In apim function");
      this.http.get('https://unimatrix.qa.devopscircuit.in/iapi/api/ResourceConfiguration')
      //this.http.get('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/Login',{headers: {'Authorization':'eyJ0eXAiOiJKV1QiLCJub25jZSI6IlFrZlR0LXFBZlhqQ1IzdUFVWmhSYWZWVTZEU29oVW92YUNnSWljT0NUZmMiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUxYjI3Zi0zOTAwLTQ2ZjMtYjIwOC1hOGI2NmRmNTMxZTMvIiwiaWF0IjoxNjg2Mjg3MDQ1LCJuYmYiOjE2ODYyODcwNDUsImV4cCI6MTY4NjI5MTkzOSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQXIrOEhvNTZYN3h1czMzYlIvMFlhZFljYU03aVFaTTBFM1ZJS3JoNlk5MEZBSGV5WkZhbFI4bXlYZm5pd1FBYU9MZjZuKzRrd25NaWFCUXVFSUN0ZHJpTDB6SFRaWkNxajZ1WXhTNU12V2g4PSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiQXBwLUZvci1VbmltYXRyaXgiLCJhcHBpZCI6IjNjMjE1ZDllLWM5NDYtNDJkMS1iMzYzLTQ5YjZiZmNmMTQzNyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQWNoYXJ5YSIsImdpdmVuX25hbWUiOiJTYWhhbmEiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxMzYuMjI2LjI1Mi4xMjAiLCJuYW1lIjoiU2FoYW5hIEFjaGFyeWEiLCJvaWQiOiJhZDhiODI4Ny1lNjNhLTQ4ZWYtOTk0ZS0wYTZhNDEyYzVmZWIiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDFBOUVGMDU5RCIsInJoIjoiMC5BUXdBZjdKUkxBQTU4MGF5Q0tpMmJmVXg0d01BQUFBQUFBQUF3QUFBQUFBQUFBQ1dBR3cuIiwic2NwIjoiTWFpbC5SZWFkIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBVc2VyLlJlYWRCYXNpYy5BbGwgZW1haWwiLCJzdWIiOiI2bUg4Z1pTck0tSXNwU3JoUWhYYlFkclNPejE0VTVtYzVQSGZXckw2STh3IiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkVVIiwidGlkIjoiMmM1MWIyN2YtMzkwMC00NmYzLWIyMDgtYThiNjZkZjUzMWUzIiwidW5pcXVlX25hbWUiOiJzYWhhbmEuYWNoYXJ5YUBhbHBpY2xvdWQub25taWNyb3NvZnQuY29tIiwidXBuIjoic2FoYW5hLmFjaGFyeWFAYWxwaWNsb3VkLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IkdkSmRPdmdXQ1VhZW9naUFkLVFFQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjliODk1ZDkyLTJjZDMtNDRjNy05ZDAyLWE2YWMyZDVlYTVjMyIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiQ0dQTmRwbERaNTFjSTlLSmw2dUNLVDV4bXo4U0lma2lsQWo3RThRbDdTRSJ9LCJ4bXNfdGNkdCI6MTYzMDUwMTEyMiwieG1zX3RkYnIiOiJFVSJ9.oZGMHaII6RkXFthQyr0POSwy7wyJ0SwaIKHdY2Hrx8b7YhZYsNdyZbYzx-k6XUA-hlrXKeESu1xQjp6Vz72XoJ_R-9F7jRk_sKAyYqSe5PH66p31zhE1qioXYAWlEAvSe9LnTHZkyvERZDLWcOtBzw8Qepn9QvqsRti2QTbXY734t8O6-CHbzInILYdZRa28t-HoKYMfv3WO9oOfhVGQesoNyh7ZpRfJCtdZiRZxpsSFyIKch_XeSSSD6t_zb_0qoqGAlzXe5Fcd46vgskjvwwXZ16la6YvAnp1pG0iWbD7B_CHAW9mnWNx4bFfqNZbBAUSaQ0qk5YSNcSL-ol4l9g'}})
      .subscribe((data)=>{
        console.log(data)
      })
    }  
    sub_list(){
      console.log("In sub_list function");
      this.http.get('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/GetUserSubscriptions')
      .subscribe((data)=>{
        console.log(data)
      })
    }  

    
    grafanaQa(){
      console.log("In sub_list function");
      this.http.get('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/GrafanaDashboard?dashboardId=unimatrixresourceoverview')
      .subscribe((data)=>{
        console.log(data)
    })}
  */

  iapi(){
    console.log("In iapi");
    this.http.get<any>('https://iapi.dev.devopscircuit.in/api/TestRespHeader',{observe: "response",headers: {'X-User-Access-Token':"Sahanaaa"}})
      .subscribe(resp => {
        console.log(resp.headers.get('Access-Control-Allow-Origin'))
        console.log(resp.headers.get('Authorization'))
        console.log("--------------------------")
        console.log(resp.body)
      });
  }
  qa(){
    console.log("In qa");
    this.http.get<any>('https://unimatrix.qa.devopscircuit.in/iapi/api/TestRespHeader',{observe: "response",headers: {'X-User-Access-Token':"Sahanaaa"}})
    .subscribe(resp => {
      console.log(resp.headers.get('Access-Control-Allow-Origin'))
      console.log(resp.headers.get('Authorization'))
      console.log("--------------------------")
      console.log(resp.body)
    });
  }
   apim(){
    console.log("IN apim");
    
    //this.http.get<any>('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/ResourceConfiguration',{observe: "response",headers: {'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNocmV5YXMgS2FtYXQiLCJlbWFpbCI6InNocmV5YXMua2FtYXRoQGxlYXJuZXIubWFuaXBhbC5lZHUiLCJ1c2VyX3ByaW5jaXBhbF9uYW1lIjoic2hyZXlhcy5rYW1hdEBhbHBpY2xvdWQub25taWNyb3NvZnQuY29tIiwib3JnYW5pc2F0aW9uIjoiU2NobmVpZGVyIEVsZWN0cmljIiwiYXBwX2lkIjoiIiwibmJmIjoxNjg3MzI4Mjk0LCJleHAiOjE2ODczMzE4OTQsImlhdCI6MTY4NzMyODI5NH0.o_D5_2_Jq6CTcTtRjp7n-qfUHHim77IoVWb1ABfwAuM"}})

    //this.http.get<any>('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/TestRespHeader',{observe: "response",headers: {'X-User-Access-Token':"Sahanaaa"}})
    
     //this.http.get<any>('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/GetUserSubscriptions',{observe: "response",headers: {'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ik5laWwgTGV3aXMiLCJlbWFpbCI6Im5laWwubGV3aXNAc2UuY29tIiwidXNlcl9wcmluY2lwYWxfbmFtZSI6Im5laWwubGV3aXNAYWxwaWNsb3VkLm9ubWljcm9zb2Z0LmNvbSIsIm9yZ2FuaXNhdGlvbiI6IlNjaG5laWRlciBFbGVjdHJpYyIsImFwcF9pZCI6IiIsIm5iZiI6MTY4Nzg1OTY2MywiZXhwIjoxNjg3ODYzMjYzLCJpYXQiOjE2ODc4NTk2NjN9.O6BHVz4OI2HpkWw0UVJ14ohJKHwDWWGq1t0Dr1iiNXk",'X-User-Access-Token':"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuYXp1cmUuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMmM1MWIyN2YtMzkwMC00NmYzLWIyMDgtYThiNjZkZjUzMWUzLyIsImlhdCI6MTY4Nzg1OTM2MiwibmJmIjoxNjg3ODU5MzYyLCJleHAiOjE2ODc4NjQxNDMsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUF5NmpXMU1zSmVLdzZFcTNkUHppM1JNcVVMSHYyNCsxc1BQd1dtelg2RkRCcVNCWlpKamRQV2ZaamZsaVFJbDdpRUgveUUwa2p1RWVNUTQ0ZHZOMWpoN0YrbjZ6SUFmWjZFWDJ6dzFhNkdyOD0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiM2MyMTVkOWUtYzk0Ni00MmQxLWIzNjMtNDliNmJmY2YxNDM3IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJMZXdpcyIsImdpdmVuX25hbWUiOiJOZWlsIiwiZ3JvdXBzIjpbImM3MzBlZTg3LWQ0YmUtNDAzZS05YjY2LWQ1ODhiZDM2NGI0MiIsIjFkOTViOTAzLTZiMWUtNGRjNS04MDQxLWMwZmExZWY0YjdjOSIsIjllODU4ODYwLWZjMzgtNDllZS05MDY2LTBiYTU4ZDViNDdlYSIsIjg2NjU2Zjk2LTc4YjQtNGE5MC04ZWViLTI1YTg4N2ZhYzMxYSJdLCJpcGFkZHIiOiIxMzYuMjI2LjI1NC4xODYiLCJuYW1lIjoiTmVpbCBMZXdpcyIsIm9pZCI6IjViYWRjYzRkLTNjMzItNGUxYi04OGI1LWRhZGIyODM1NTBkNCIsInB1aWQiOiIxMDAzMjAwMUY0N0U4QkM4IiwicmgiOiIwLkFRd0FmN0pSTEFBNTgwYXlDS2kyYmZVeDQwWklmM2tBdXRkUHVrUGF3ZmoyTUJPV0FPYy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiI3TGxLOGpRMWpoYTBscnlvVjV6Uk90ZzFzSUNRdkI5SU42YW84Mzhsb2k0IiwidGlkIjoiMmM1MWIyN2YtMzkwMC00NmYzLWIyMDgtYThiNjZkZjUzMWUzIiwidW5pcXVlX25hbWUiOiJuZWlsLmxld2lzQGFscGljbG91ZC5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJuZWlsLmxld2lzQGFscGljbG91ZC5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJadlR1TVpLWXEwNktvRHNRSEk4SkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI5Yjg5NWQ5Mi0yY2QzLTQ0YzctOWQwMi1hNmFjMmQ1ZWE1YzMiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3RjZHQiOjE2MzA1MDExMjJ9.jtuuS8qAb3bSrKyNb2j5SGhnvX5sMEyEtPQ9l8D9m6WcCr__d6KAmJltTlTUiQwZCjQS9dfwbGZhTz-dUiAwuz-iEdL_JBKPJSJMAgDvwfC5ZSbOxCv1G8-jzHMuMMb625NRnZS8NaoFDmKn8wEiSBN2YE1TC2mATg13EF5QOne3JgW6EmksN_b9oO0nEIQzGdrwd0RHiwoPcPePdFBv4-X3LMdkHLnND9BIKGmRF8QQbgXklzOmY0AivzeEVBOlZyg1Am7FZxP8M3kAyzGvJjupiPczO2fWT_2-uWSiwH8Od727186lzA-Z2GhjpfFm5nQBjsQFTXOqlYAPW8_97A"}})
    this.http.get<any>('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/FormBuilderResourceTypesList',{observe: "response",headers: {'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNhaGFuYSBBY2hhcnlhIiwiZW1haWwiOiJzYWhhbmFnYWphbmFuYS5hY2hhcnlhQHNlLmNvbSIsInVzZXJfcHJpbmNpcGFsX25hbWUiOiJzYWhhbmEuYWNoYXJ5YUBhbHBpY2xvdWQub25taWNyb3NvZnQuY29tIiwib3JnYW5pc2F0aW9uIjoiU2NobmVpZGVyIEVsZWN0cmljIiwiYXBwX2lkIjoiIiwibmJmIjoxNjg4NTMzNTQ2LCJleHAiOjE2ODg1MzcxNDYsImlhdCI6MTY4ODUzMzU0Nn0.TMIaUZKZY0fQx2eH-d5OXIyuxZ5i5Ul-ScLR-MhEnkE"}})
    
     .subscribe(resp => {
      console.log("Finallyyyy",resp.headers.get('Authorization'))
      console.log("--------------------------")
      console.log(resp.body)
    });
   }
   apim1(){
    console.log("IN apim");
    
    //this.http.get<any>('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/ResourceConfiguration',{observe: "response",headers: {'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNocmV5YXMgS2FtYXQiLCJlbWFpbCI6InNocmV5YXMua2FtYXRoQGxlYXJuZXIubWFuaXBhbC5lZHUiLCJ1c2VyX3ByaW5jaXBhbF9uYW1lIjoic2hyZXlhcy5rYW1hdEBhbHBpY2xvdWQub25taWNyb3NvZnQuY29tIiwib3JnYW5pc2F0aW9uIjoiU2NobmVpZGVyIEVsZWN0cmljIiwiYXBwX2lkIjoiIiwibmJmIjoxNjg3MzI4Mjk0LCJleHAiOjE2ODczMzE4OTQsImlhdCI6MTY4NzMyODI5NH0.o_D5_2_Jq6CTcTtRjp7n-qfUHHim77IoVWb1ABfwAuM"}})

    //this.http.get<any>('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/TestRespHeader',{observe: "response",headers: {'X-User-Access-Token':"Sahanaaa"}})
    
     //this.http.get<any>('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/GetUserSubscriptions',{observe: "response",headers: {'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ik5laWwgTGV3aXMiLCJlbWFpbCI6Im5laWwubGV3aXNAc2UuY29tIiwidXNlcl9wcmluY2lwYWxfbmFtZSI6Im5laWwubGV3aXNAYWxwaWNsb3VkLm9ubWljcm9zb2Z0LmNvbSIsIm9yZ2FuaXNhdGlvbiI6IlNjaG5laWRlciBFbGVjdHJpYyIsImFwcF9pZCI6IiIsIm5iZiI6MTY4Nzg1OTY2MywiZXhwIjoxNjg3ODYzMjYzLCJpYXQiOjE2ODc4NTk2NjN9.O6BHVz4OI2HpkWw0UVJ14ohJKHwDWWGq1t0Dr1iiNXk",'X-User-Access-Token':"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuYXp1cmUuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMmM1MWIyN2YtMzkwMC00NmYzLWIyMDgtYThiNjZkZjUzMWUzLyIsImlhdCI6MTY4Nzg1OTM2MiwibmJmIjoxNjg3ODU5MzYyLCJleHAiOjE2ODc4NjQxNDMsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUF5NmpXMU1zSmVLdzZFcTNkUHppM1JNcVVMSHYyNCsxc1BQd1dtelg2RkRCcVNCWlpKamRQV2ZaamZsaVFJbDdpRUgveUUwa2p1RWVNUTQ0ZHZOMWpoN0YrbjZ6SUFmWjZFWDJ6dzFhNkdyOD0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiM2MyMTVkOWUtYzk0Ni00MmQxLWIzNjMtNDliNmJmY2YxNDM3IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJMZXdpcyIsImdpdmVuX25hbWUiOiJOZWlsIiwiZ3JvdXBzIjpbImM3MzBlZTg3LWQ0YmUtNDAzZS05YjY2LWQ1ODhiZDM2NGI0MiIsIjFkOTViOTAzLTZiMWUtNGRjNS04MDQxLWMwZmExZWY0YjdjOSIsIjllODU4ODYwLWZjMzgtNDllZS05MDY2LTBiYTU4ZDViNDdlYSIsIjg2NjU2Zjk2LTc4YjQtNGE5MC04ZWViLTI1YTg4N2ZhYzMxYSJdLCJpcGFkZHIiOiIxMzYuMjI2LjI1NC4xODYiLCJuYW1lIjoiTmVpbCBMZXdpcyIsIm9pZCI6IjViYWRjYzRkLTNjMzItNGUxYi04OGI1LWRhZGIyODM1NTBkNCIsInB1aWQiOiIxMDAzMjAwMUY0N0U4QkM4IiwicmgiOiIwLkFRd0FmN0pSTEFBNTgwYXlDS2kyYmZVeDQwWklmM2tBdXRkUHVrUGF3ZmoyTUJPV0FPYy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiI3TGxLOGpRMWpoYTBscnlvVjV6Uk90ZzFzSUNRdkI5SU42YW84Mzhsb2k0IiwidGlkIjoiMmM1MWIyN2YtMzkwMC00NmYzLWIyMDgtYThiNjZkZjUzMWUzIiwidW5pcXVlX25hbWUiOiJuZWlsLmxld2lzQGFscGljbG91ZC5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJuZWlsLmxld2lzQGFscGljbG91ZC5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJadlR1TVpLWXEwNktvRHNRSEk4SkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI5Yjg5NWQ5Mi0yY2QzLTQ0YzctOWQwMi1hNmFjMmQ1ZWE1YzMiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3RjZHQiOjE2MzA1MDExMjJ9.jtuuS8qAb3bSrKyNb2j5SGhnvX5sMEyEtPQ9l8D9m6WcCr__d6KAmJltTlTUiQwZCjQS9dfwbGZhTz-dUiAwuz-iEdL_JBKPJSJMAgDvwfC5ZSbOxCv1G8-jzHMuMMb625NRnZS8NaoFDmKn8wEiSBN2YE1TC2mATg13EF5QOne3JgW6EmksN_b9oO0nEIQzGdrwd0RHiwoPcPePdFBv4-X3LMdkHLnND9BIKGmRF8QQbgXklzOmY0AivzeEVBOlZyg1Am7FZxP8M3kAyzGvJjupiPczO2fWT_2-uWSiwH8Od727186lzA-Z2GhjpfFm5nQBjsQFTXOqlYAPW8_97A"}})
    this.http.get<any>('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/FormBuilderResourceFormList',{observe: "response",headers: {'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNhaGFuYSBBY2hhcnlhIiwiZW1haWwiOiJzYWhhbmFnYWphbmFuYS5hY2hhcnlhQHNlLmNvbSIsInVzZXJfcHJpbmNpcGFsX25hbWUiOiJzYWhhbmEuYWNoYXJ5YUBhbHBpY2xvdWQub25taWNyb3NvZnQuY29tIiwib3JnYW5pc2F0aW9uIjoiU2NobmVpZGVyIEVsZWN0cmljIiwiYXBwX2lkIjoiIiwibmJmIjoxNjg4NTMzNTQ2LCJleHAiOjE2ODg1MzcxNDYsImlhdCI6MTY4ODUzMzU0Nn0.TMIaUZKZY0fQx2eH-d5OXIyuxZ5i5Ul-ScLR-MhEnkE"}})
    
     .subscribe(resp => {
      console.log("Finallyyyy",resp.headers.get('Authorization'))
      console.log(resp.headers.get('Content-Type'))
      console.log("--------------------------")
      console.log(resp.body)
    });
   }
   g_dashboard(){
    console.log("IN g_dashboard");
    this.http.get<any>('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/GrafanaDashboard?dashboardId=unimatrixresourceoverview',{observe: "response",headers: {'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNhaGFuYSBBY2hhcnlhIiwiZW1haWwiOiJzYWhhbmFnYWphbmFuYS5hY2hhcnlhQHNlLmNvbSIsInVzZXJfcHJpbmNpcGFsX25hbWUiOiJzYWhhbmEuYWNoYXJ5YUBhbHBpY2xvdWQub25taWNyb3NvZnQuY29tIiwib3JnYW5pc2F0aW9uIjoiU2NobmVpZGVyIEVsZWN0cmljIiwiYXBwX2lkIjoiIiwibmJmIjoxNjg3MjQwODk5LCJleHAiOjE2ODcyNDI2OTksImlhdCI6MTY4NzI0MDg5OX0.P_SYn672V8xpYZUh9sURNf6WsZ5FguBFs7f4UWMbFY0"}})
    .subscribe(resp => {
      console.log("Finallyyyy",resp.headers.get('Authorization'))
      console.log('--------------------------------------')

      console.log(resp.body)
    });
   }
   restype_create(){
    console.log("IN restype_create");
    var data= {
      "resourceType": "Microsoft.Storage/storageAccounts",
      "resourceGeneralDisplayName": "SAa",
      "resourceGeneralIconUrl": "sa.png"
    }
    this.http.post<any>('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/FormBuilderResourceType',data,{observe: "response",headers: {'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNocmV5YXMgS2FtYXQiLCJlbWFpbCI6InNocmV5YXMua2FtYXRoQGxlYXJuZXIubWFuaXBhbC5lZHUiLCJ1c2VyX3ByaW5jaXBhbF9uYW1lIjoic2hyZXlhcy5rYW1hdEBhbHBpY2xvdWQub25taWNyb3NvZnQuY29tIiwib3JnYW5pc2F0aW9uIjoiU2NobmVpZGVyIEVsZWN0cmljIiwiYXBwX2lkIjoiIiwibmJmIjoxNjg3MzI4Mjk0LCJleHAiOjE2ODczMzE4OTQsImlhdCI6MTY4NzMyODI5NH0.o_D5_2_Jq6CTcTtRjp7n-qfUHHim77IoVWb1ABfwAuM"}})
    .subscribe(resp => {
      console.log("Finallyyyy",resp.headers.get('Authorization'))
      console.log('--------------------------------------')
      console.log(resp.body)
    });
   }

   test(){
    this.http.delete<any>('https://localhost:44379/api/FormBuilderResourceProperty?PropertyId=eb588901-48c0-46fd-98b5-a9c2e317c96f',{observe: "response"})
    .subscribe(resp => {
      console.log("Finallyyyy")
      console.log('--------------------------------------')
      console.log(resp.body)
    });
   }

   testToday(){
    console.log("IN g_dashboard");
    this.http.get<any>('https://apim01-ecad-pt-dev-tools-we.azure-api.net/unimatrix/api/PyScriptGetBPJson?guid=3f1ca83f-6f06-44de-a484-7e46bc16e6e2',{observe: "response"})
    .subscribe(resp => {
      console.log(resp.body)
    });
   }
  }