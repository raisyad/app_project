interface SnackbarInterface {
    open: boolean;
    onClose: () => void;
    message: string;
}

export default SnackbarInterface;