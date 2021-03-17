export const goBack = (history: any) => {
  history.goBack()
}

export const goToCreateTask = async (history: any) => {
  history.push('/cadastro')
}