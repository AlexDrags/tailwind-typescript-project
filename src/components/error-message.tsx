interface ErrorMessageProps {
    error: string
}
export default function ErrorMessage({error}: ErrorMessageProps) {
    return(
        <p className='text-red-300'>{error}</p>
    )
}