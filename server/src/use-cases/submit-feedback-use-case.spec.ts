import { SubmitFeedbackUseCase } from './submit-feedback-use-case'

const submitFeedback = new SubmitFeedbackUseCase(
  { create: async () => {}},
  { sendMail: async () => {}}
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async ()=>{

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'exemple comment',
      screenshot: 'data:image/png;base64/asfafqfq',
    })).resolves.not.toThrow()
  })
})

describe('Submit feedback', () => {
  it('should be able to submit feedback without comment', async ()=>{
    
    await expect(submitFeedback.execute({
      type: '',
      comment: '',
      screenshot: 'data:image/png;base64/asfafqfq',
    })).rejects.toThrow()
  })
})

describe('Submit feedback', () => {
  it('should be able to submit feedback with an invalid screenshot', async ()=>{
    
    await expect(submitFeedback.execute({
      type: '',
      comment: 'exemple comment',
      screenshot: 'dat',
    })).rejects.toThrow()
  })
})