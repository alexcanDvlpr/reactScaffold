import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface UseProductHookProps {
    product: Product;
    onChange: ((args: OnChangeArgs) => void) | undefined;
    value: number;
}

export const useProduct = ({ product, onChange, value }: UseProductHookProps) => {
    const [counter, setCounter] = useState<number>(value)
    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {
        if (isControlled.current) {
            return onChange!({ count: value, product })
        }

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);
        onChange && onChange({ product, count: newValue });
    }

    const decreaseBy = (value: number) => {
        const newValue = Math.max(counter - value, 0);
        setCounter(newValue);
        onChange && onChange({ product, count: newValue });
    }

    useEffect(() => {
        setCounter(value);
    }, [value])


    return { counter, increaseBy, decreaseBy };
}