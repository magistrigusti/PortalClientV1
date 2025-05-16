
export const ErrorMessage = ({ error = ''}: { error: string }) => {
  return error && (
    <p className="text-red-500 mt-2 mdb-5 text-small">
      { error }
    </p>
  )
}