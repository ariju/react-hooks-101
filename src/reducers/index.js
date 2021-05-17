//action = {
// type: 'CREATE_EVENT',
// title: '2020東京オリンピックのお知らせ',
// body: '2020年に東京でオリンピックを開催します！つきましては、、、'
//}
//
//# before
//state = []
//# after
//state = [
// { id: 1, title: 'タイトル1', body: 'ボディー1'},
// { id: 2, title: 'タイトル2', body: 'ボディー2'},
// { id: 3, title: 'タイトル3', body: 'ボディー3'},
//]
const events = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body }
      const length = state.length
//lengthが0かどうか真偽、真の場合1そうでない場合はstateの最後の要素を持ってきてid+1
      const id =  length === 0 ? 1 : state[length - 1].id + 1
//新たな状態遷移後の状態を返す最後の要素に今回作ったevent情報を入れる
      return [...state, { id, ...event }]
    case 'DELETE_EVENT':
//actionで渡ってくるidと等しくないものだけ残る例えばid123あって2を選択した場合にはid13だけ残る
      return state.filter( event => event.id !== action.id )
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}

export default events