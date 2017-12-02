### Method: <br>
GET

### Endpoint: <br>
{host}/api/v1/foto/:file

### Header: <br>

no header sleep pode ser informado o response time mínimo da requisição:
sleep: 10

### Exemplos: <br>
GET /api/v1/foto/1080p HTTP/1.1 <br>
Host: 192.168.40.169 <br>
sleep: 10


curl -X GET \
  http://192.168.40.169/api/v1/foto/1080p.jpeg \
  -H 'sleep: 10'
