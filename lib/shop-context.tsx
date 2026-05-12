"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { products } from "@/lib/shop-data";
import type { Product } from "@/lib/shop-types";

type FilterOption =
    | "All"
    | "New Arrivals"
    | "Bags"
    | "Dresses"
    | "Accessories"
    | "Footwear"
    | "Best Sellers";

type SortOption = "Newest" | "Best Selling" | "Price Low to High" | "Price High to Low";

type ShopContextValue = {
    visibleProducts: Product[];
    filteredCount: number;
    activeFilter: FilterOption;
    setActiveFilter: (value: FilterOption) => void;
    selectedSize: string;
    setSelectedSize: (value: string) => void;
    selectedColor: string;
    setSelectedColor: (value: string) => void;
    priceRange: [number, number];
    setPriceRange: (value: [number, number]) => void;
    sortOption: SortOption;
    setSortOption: (value: SortOption) => void;
    currentView: "grid" | "list";
    setCurrentView: (value: "grid" | "list") => void;
    loadMore: () => void;
    hasMore: boolean;
    totalCount: number;
    visibleCount: number;
};

const productsPerPage = 8;

const ShopContext = createContext<ShopContextValue | undefined>(undefined);

function orderProducts(products: Product[], sortOption: SortOption) {
    const sorted = [...products];

    if (sortOption === "Price Low to High") {
        sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price High to Low") {
        sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Best Selling") {
        sorted.sort((a, b) => (a.label === "Best Seller" ? -1 : 1) - (b.label === "Best Seller" ? -1 : 1));
    }

    return sorted;
}

function filterProducts(
    products: Product[],
    filter: FilterOption,
    selectedSize: string,
    selectedColor: string,
    priceRange: [number, number]
) {
    return products.filter((product) => {
        const matchesFilter =
            filter === "All"
                ? true
                : filter === "New Arrivals"
                    ? product.label === "New"
                    : filter === "Best Sellers"
                        ? product.label === "Best Seller"
                        : product.category === filter;

        const matchesSize = selectedSize === "All" ? true : product.sizes.includes(selectedSize);
        const matchesColor = selectedColor === "All" ? true : product.color.toLowerCase() === selectedColor.toLowerCase();
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

        return matchesFilter && matchesSize && matchesColor && matchesPrice;
    });
}

export function ShopProvider({ children }: { children: ReactNode }) {
    const [activeFilter, setActiveFilterState] = useState<FilterOption>("All");
    const [selectedSize, setSelectedSizeState] = useState<string>("All");
    const [selectedColor, setSelectedColorState] = useState<string>("All");
    const [priceRange, setPriceRangeState] = useState<[number, number]>([20, 260]);
    const [sortOption, setSortOptionState] = useState<SortOption>("Newest");
    const [currentView, setCurrentViewState] = useState<"grid" | "list">("grid");
    const [visibleCount, setVisibleCount] = useState(productsPerPage);

    const filtered = useMemo(
        () => filterProducts(products, activeFilter, selectedSize, selectedColor, priceRange),
        [activeFilter, selectedSize, selectedColor, priceRange]
    );

    const ordered = useMemo(() => orderProducts(filtered, sortOption), [filtered, sortOption]);
    const visibleProducts = useMemo(() => ordered.slice(0, visibleCount), [ordered, visibleCount]);
    const hasMore = visibleCount < ordered.length;

    const setActiveFilter = (value: FilterOption) => {
        setActiveFilterState(value);
        setVisibleCount(productsPerPage);
    };

    const setSelectedSize = (value: string) => {
        setSelectedSizeState(value);
        setVisibleCount(productsPerPage);
    };

    const setSelectedColor = (value: string) => {
        setSelectedColorState(value);
        setVisibleCount(productsPerPage);
    };

    const setPriceRange = (value: [number, number]) => {
        setPriceRangeState(value);
        setVisibleCount(productsPerPage);
    };

    const setSortOption = (value: SortOption) => {
        setSortOptionState(value);
        setVisibleCount(productsPerPage);
    };

    const setCurrentView = (value: "grid" | "list") => {
        setCurrentViewState(value);
    };

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(ordered.length, prev + productsPerPage));
    };

    const value = {
        visibleProducts,
        filteredCount: filtered.length,
        activeFilter,
        setActiveFilter,
        selectedSize,
        setSelectedSize,
        selectedColor,
        setSelectedColor,
        priceRange,
        setPriceRange,
        sortOption,
        setSortOption,
        currentView,
        setCurrentView,
        loadMore,
        hasMore,
        totalCount: products.length,
        visibleCount
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
    const context = useContext(ShopContext);

    if (!context) {
        throw new Error("useShop must be used within ShopProvider");
    }

    return context;
}
