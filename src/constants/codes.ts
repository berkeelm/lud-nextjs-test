interface CodeModel {
    language: 'tsx' | 'python' | 'csharp' | 'curl' | 'php' | 'ruby' | 'go'
    codeBlock: string
}

const codeData: CodeModel[] = [
    {
        language: 'tsx',
        codeBlock: `
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer [TOKEN]");
      
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
      
        fetch("https://api.lookupdatas.com/addressmanagement/api/country/getall", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
                        `
    },
    {
        language: 'python',
        codeBlock: `  
        import http.client

        conn = http.client.HTTPSConnection("api.lookupdatas.com")
        payload = ''
        headers = {
          'Authorization': 'Bearer [TOKEN]'
        }
        conn.request("GET", "/addressmanagement/api/country/getall", payload, headers)
        res = conn.getresponse()
        data = res.read()
        print(data.decode("utf-8"))
                        `
    },
    {
        language: 'csharp',
        codeBlock: `
        var client = new HttpClient();
        var request = new HttpRequestMessage(HttpMethod.Get, "https://api.lookupdatas.com/addressmanagement/api/country/getall");
        request.Headers.Add("Authorization", "Bearer [TOKEN]");
        var response = await client.SendAsync(request);
        response.EnsureSuccessStatusCode();
        Console.WriteLine(await response.Content.ReadAsStringAsync());`
    },
    {
        language: 'curl',
        codeBlock: `  
        curl --location 'https://api.lookupdatas.com/addressmanagement/api/country/getall' \

        --header 'Authorization: Bearer [TOKEN]'
      
      
      
        
      
      
      
                        `
    },
    {
        language: 'php',
        codeBlock: `  
        $curl = curl_init();
    
        curl_setopt_array($curl, array(
          CURLOPT_URL => 'https://api.lookupdatas.com/addressmanagement/api/country/getall',
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => 'GET',
          CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer [TOKEN]'
          ),
        ));
          
        $response = curl_exec($curl);
          
        curl_close($curl);
        echo $response;
                        `

    },
    {
        language: 'ruby',
        codeBlock: `  
        require "uri"
        require "net/http"
      
        url = URI("https://api.lookupdatas.com/addressmanagement/api/country/getall")
      
        https = Net::HTTP.new(url.host, url.port)
        https.use_ssl = true
      
        request = Net::HTTP::Get.new(url)
        request["Authorization"] = "Bearer [TOKEN]"
      
        response = https.request(request)
        puts response.read_body
                        `
    },
    {
        language: 'go',
        codeBlock: `  
        package main

        import (
          "fmt"
          "net/http"
          "io/ioutil"
        )
      
        func main() {
      
          url := "https://api.lookupdatas.com/addressmanagement/api/country/getall"
          method := "GET"
      
          client := &http.Client {
          }
          req, err := http.NewRequest(method, url, nil)
      
          if err != nil {
            fmt.Println(err)
            return
          }
          req.Header.Add("Authorization", "Bearer [TOKEN]")
      
          res, err := client.Do(req)
          if err != nil {
            fmt.Println(err)
            return
          }
          defer res.Body.Close()
      
          body, err := ioutil.ReadAll(res.Body)
          if err != nil {
            fmt.Println(err)
            return
          }
          fmt.Println(string(body))
        }
                        `
    }
]

export default codeData;