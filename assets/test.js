
const { from, fromEvent, of } = rxjs;
const { fromFetch } = rxjs.fetch
const { map, filter, pluck, switchMap, catchError } = rxjs.operators;

const $input = $(`#query`)
const $reflect = $(`#reflection`)
const $tbody = $(`table tbody`)

function syncHeaderWithInput() {
   fromEvent($input, "keyup")
      .pipe(pluck("target", "value"))
      .subscribe(x => {
         $reflect.text(x)
      })
}

async function callAPIByRxJS() {
   fromFetch("https://jsonplaceholder.typicode.com/posts")
      .pipe(switchMap(resp => {
         if (resp.ok) {
            return resp.json()
         }
         return of({ error: true, message: `${resp.status}` })
      }), catchError(err => { console.log(err) }))
      .subscribe({
         next: result => {
            from(result)
               .pipe(map(post => {
                  $tbody.append(`<tr><td>${post.userId}</td><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr>`)
               }))
               .subscribe(x => { })
         },
         complete: () => console.log("OK.")
      })
}

$(() => {
   syncHeaderWithInput()

   callAPIByRxJS()
})