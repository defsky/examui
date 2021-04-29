
export default {
    debug: true,
    state: {
      message: 'Hello!',
      question:{
          options:{}
      }
    },
    setMessageAction (newValue) {
      if (this.debug) console.log('setMessageAction triggered with', newValue)
      this.state.message = newValue
    },
    clearMessageAction () {
      if (this.debug) console.log('clearMessageAction triggered')
      this.state.message = ''
    },
    setQuestion(q){
        if (this.debug) console.log(q)
        this.state.question = q
        this.state.question.options=JSON.parse(q.options)
    }
}