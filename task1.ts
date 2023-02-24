interface IPrice {
    price: number
    discount: number
    isInstallment?: boolean
    months?: number
}

const totalPrice = ({ price, discount, isInstallment, months = 1} : IPrice) : number => {
    const fullPrice: number = price * (100 - discount) / 100;
    if (!isInstallment) return fullPrice;
    return fullPrice / months;
}

