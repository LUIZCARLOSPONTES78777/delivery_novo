import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Cartao
 *
 */
export type CartaoModel = runtime.Types.Result.DefaultSelection<Prisma.$CartaoPayload>;
export type AggregateCartao = {
    _count: CartaoCountAggregateOutputType | null;
    _min: CartaoMinAggregateOutputType | null;
    _max: CartaoMaxAggregateOutputType | null;
};
export type CartaoMinAggregateOutputType = {
    id: string | null;
    nomeTitular: string | null;
    cpfTitular: string | null;
    cardNumber: string | null;
    date: string | null;
    cvv: string | null;
    salvoEm: Date | null;
};
export type CartaoMaxAggregateOutputType = {
    id: string | null;
    nomeTitular: string | null;
    cpfTitular: string | null;
    cardNumber: string | null;
    date: string | null;
    cvv: string | null;
    salvoEm: Date | null;
};
export type CartaoCountAggregateOutputType = {
    id: number;
    nomeTitular: number;
    cpfTitular: number;
    cardNumber: number;
    date: number;
    cvv: number;
    salvoEm: number;
    _all: number;
};
export type CartaoMinAggregateInputType = {
    id?: true;
    nomeTitular?: true;
    cpfTitular?: true;
    cardNumber?: true;
    date?: true;
    cvv?: true;
    salvoEm?: true;
};
export type CartaoMaxAggregateInputType = {
    id?: true;
    nomeTitular?: true;
    cpfTitular?: true;
    cardNumber?: true;
    date?: true;
    cvv?: true;
    salvoEm?: true;
};
export type CartaoCountAggregateInputType = {
    id?: true;
    nomeTitular?: true;
    cpfTitular?: true;
    cardNumber?: true;
    date?: true;
    cvv?: true;
    salvoEm?: true;
    _all?: true;
};
export type CartaoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Cartao to aggregate.
     */
    where?: Prisma.CartaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: Prisma.CartaoOrderByWithRelationInput | Prisma.CartaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CartaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cartaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Cartaos
    **/
    _count?: true | CartaoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CartaoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CartaoMaxAggregateInputType;
};
export type GetCartaoAggregateType<T extends CartaoAggregateArgs> = {
    [P in keyof T & keyof AggregateCartao]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCartao[P]> : Prisma.GetScalarType<T[P], AggregateCartao[P]>;
};
export type CartaoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartaoWhereInput;
    orderBy?: Prisma.CartaoOrderByWithAggregationInput | Prisma.CartaoOrderByWithAggregationInput[];
    by: Prisma.CartaoScalarFieldEnum[] | Prisma.CartaoScalarFieldEnum;
    having?: Prisma.CartaoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartaoCountAggregateInputType | true;
    _min?: CartaoMinAggregateInputType;
    _max?: CartaoMaxAggregateInputType;
};
export type CartaoGroupByOutputType = {
    id: string;
    nomeTitular: string;
    cpfTitular: string | null;
    cardNumber: string;
    date: string;
    cvv: string;
    salvoEm: Date;
    _count: CartaoCountAggregateOutputType | null;
    _min: CartaoMinAggregateOutputType | null;
    _max: CartaoMaxAggregateOutputType | null;
};
type GetCartaoGroupByPayload<T extends CartaoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CartaoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CartaoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CartaoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CartaoGroupByOutputType[P]>;
}>>;
export type CartaoWhereInput = {
    AND?: Prisma.CartaoWhereInput | Prisma.CartaoWhereInput[];
    OR?: Prisma.CartaoWhereInput[];
    NOT?: Prisma.CartaoWhereInput | Prisma.CartaoWhereInput[];
    id?: Prisma.StringFilter<"Cartao"> | string;
    nomeTitular?: Prisma.StringFilter<"Cartao"> | string;
    cpfTitular?: Prisma.StringNullableFilter<"Cartao"> | string | null;
    cardNumber?: Prisma.StringFilter<"Cartao"> | string;
    date?: Prisma.StringFilter<"Cartao"> | string;
    cvv?: Prisma.StringFilter<"Cartao"> | string;
    salvoEm?: Prisma.DateTimeFilter<"Cartao"> | Date | string;
};
export type CartaoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nomeTitular?: Prisma.SortOrder;
    cpfTitular?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    cvv?: Prisma.SortOrder;
    salvoEm?: Prisma.SortOrder;
};
export type CartaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CartaoWhereInput | Prisma.CartaoWhereInput[];
    OR?: Prisma.CartaoWhereInput[];
    NOT?: Prisma.CartaoWhereInput | Prisma.CartaoWhereInput[];
    nomeTitular?: Prisma.StringFilter<"Cartao"> | string;
    cpfTitular?: Prisma.StringNullableFilter<"Cartao"> | string | null;
    cardNumber?: Prisma.StringFilter<"Cartao"> | string;
    date?: Prisma.StringFilter<"Cartao"> | string;
    cvv?: Prisma.StringFilter<"Cartao"> | string;
    salvoEm?: Prisma.DateTimeFilter<"Cartao"> | Date | string;
}, "id" | "id">;
export type CartaoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nomeTitular?: Prisma.SortOrder;
    cpfTitular?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    cvv?: Prisma.SortOrder;
    salvoEm?: Prisma.SortOrder;
    _count?: Prisma.CartaoCountOrderByAggregateInput;
    _max?: Prisma.CartaoMaxOrderByAggregateInput;
    _min?: Prisma.CartaoMinOrderByAggregateInput;
};
export type CartaoScalarWhereWithAggregatesInput = {
    AND?: Prisma.CartaoScalarWhereWithAggregatesInput | Prisma.CartaoScalarWhereWithAggregatesInput[];
    OR?: Prisma.CartaoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CartaoScalarWhereWithAggregatesInput | Prisma.CartaoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Cartao"> | string;
    nomeTitular?: Prisma.StringWithAggregatesFilter<"Cartao"> | string;
    cpfTitular?: Prisma.StringNullableWithAggregatesFilter<"Cartao"> | string | null;
    cardNumber?: Prisma.StringWithAggregatesFilter<"Cartao"> | string;
    date?: Prisma.StringWithAggregatesFilter<"Cartao"> | string;
    cvv?: Prisma.StringWithAggregatesFilter<"Cartao"> | string;
    salvoEm?: Prisma.DateTimeWithAggregatesFilter<"Cartao"> | Date | string;
};
export type CartaoCreateInput = {
    id: string;
    nomeTitular: string;
    cpfTitular?: string | null;
    cardNumber: string;
    date: string;
    cvv: string;
    salvoEm?: Date | string;
};
export type CartaoUncheckedCreateInput = {
    id: string;
    nomeTitular: string;
    cpfTitular?: string | null;
    cardNumber: string;
    date: string;
    cvv: string;
    salvoEm?: Date | string;
};
export type CartaoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeTitular?: Prisma.StringFieldUpdateOperationsInput | string;
    cpfTitular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    cvv?: Prisma.StringFieldUpdateOperationsInput | string;
    salvoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartaoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeTitular?: Prisma.StringFieldUpdateOperationsInput | string;
    cpfTitular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    cvv?: Prisma.StringFieldUpdateOperationsInput | string;
    salvoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartaoCreateManyInput = {
    id: string;
    nomeTitular: string;
    cpfTitular?: string | null;
    cardNumber: string;
    date: string;
    cvv: string;
    salvoEm?: Date | string;
};
export type CartaoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeTitular?: Prisma.StringFieldUpdateOperationsInput | string;
    cpfTitular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    cvv?: Prisma.StringFieldUpdateOperationsInput | string;
    salvoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartaoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeTitular?: Prisma.StringFieldUpdateOperationsInput | string;
    cpfTitular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    cvv?: Prisma.StringFieldUpdateOperationsInput | string;
    salvoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartaoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nomeTitular?: Prisma.SortOrder;
    cpfTitular?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    cvv?: Prisma.SortOrder;
    salvoEm?: Prisma.SortOrder;
};
export type CartaoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nomeTitular?: Prisma.SortOrder;
    cpfTitular?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    cvv?: Prisma.SortOrder;
    salvoEm?: Prisma.SortOrder;
};
export type CartaoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nomeTitular?: Prisma.SortOrder;
    cpfTitular?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    cvv?: Prisma.SortOrder;
    salvoEm?: Prisma.SortOrder;
};
export type CartaoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nomeTitular?: boolean;
    cpfTitular?: boolean;
    cardNumber?: boolean;
    date?: boolean;
    cvv?: boolean;
    salvoEm?: boolean;
}, ExtArgs["result"]["cartao"]>;
export type CartaoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nomeTitular?: boolean;
    cpfTitular?: boolean;
    cardNumber?: boolean;
    date?: boolean;
    cvv?: boolean;
    salvoEm?: boolean;
}, ExtArgs["result"]["cartao"]>;
export type CartaoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nomeTitular?: boolean;
    cpfTitular?: boolean;
    cardNumber?: boolean;
    date?: boolean;
    cvv?: boolean;
    salvoEm?: boolean;
}, ExtArgs["result"]["cartao"]>;
export type CartaoSelectScalar = {
    id?: boolean;
    nomeTitular?: boolean;
    cpfTitular?: boolean;
    cardNumber?: boolean;
    date?: boolean;
    cvv?: boolean;
    salvoEm?: boolean;
};
export type CartaoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nomeTitular" | "cpfTitular" | "cardNumber" | "date" | "cvv" | "salvoEm", ExtArgs["result"]["cartao"]>;
export type $CartaoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cartao";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nomeTitular: string;
        cpfTitular: string | null;
        cardNumber: string;
        date: string;
        cvv: string;
        salvoEm: Date;
    }, ExtArgs["result"]["cartao"]>;
    composites: {};
};
export type CartaoGetPayload<S extends boolean | null | undefined | CartaoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CartaoPayload, S>;
export type CartaoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CartaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CartaoCountAggregateInputType | true;
};
export interface CartaoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cartao'];
        meta: {
            name: 'Cartao';
        };
    };
    /**
     * Find zero or one Cartao that matches the filter.
     * @param {CartaoFindUniqueArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartaoFindUniqueArgs>(args: Prisma.SelectSubset<T, CartaoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CartaoClient<runtime.Types.Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Cartao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartaoFindUniqueOrThrowArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartaoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CartaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CartaoClient<runtime.Types.Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cartao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoFindFirstArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartaoFindFirstArgs>(args?: Prisma.SelectSubset<T, CartaoFindFirstArgs<ExtArgs>>): Prisma.Prisma__CartaoClient<runtime.Types.Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cartao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoFindFirstOrThrowArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartaoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CartaoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CartaoClient<runtime.Types.Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Cartaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cartaos
     * const cartaos = await prisma.cartao.findMany()
     *
     * // Get first 10 Cartaos
     * const cartaos = await prisma.cartao.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cartaoWithIdOnly = await prisma.cartao.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CartaoFindManyArgs>(args?: Prisma.SelectSubset<T, CartaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Cartao.
     * @param {CartaoCreateArgs} args - Arguments to create a Cartao.
     * @example
     * // Create one Cartao
     * const Cartao = await prisma.cartao.create({
     *   data: {
     *     // ... data to create a Cartao
     *   }
     * })
     *
     */
    create<T extends CartaoCreateArgs>(args: Prisma.SelectSubset<T, CartaoCreateArgs<ExtArgs>>): Prisma.Prisma__CartaoClient<runtime.Types.Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Cartaos.
     * @param {CartaoCreateManyArgs} args - Arguments to create many Cartaos.
     * @example
     * // Create many Cartaos
     * const cartao = await prisma.cartao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CartaoCreateManyArgs>(args?: Prisma.SelectSubset<T, CartaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Cartaos and returns the data saved in the database.
     * @param {CartaoCreateManyAndReturnArgs} args - Arguments to create many Cartaos.
     * @example
     * // Create many Cartaos
     * const cartao = await prisma.cartao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Cartaos and only return the `id`
     * const cartaoWithIdOnly = await prisma.cartao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CartaoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CartaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Cartao.
     * @param {CartaoDeleteArgs} args - Arguments to delete one Cartao.
     * @example
     * // Delete one Cartao
     * const Cartao = await prisma.cartao.delete({
     *   where: {
     *     // ... filter to delete one Cartao
     *   }
     * })
     *
     */
    delete<T extends CartaoDeleteArgs>(args: Prisma.SelectSubset<T, CartaoDeleteArgs<ExtArgs>>): Prisma.Prisma__CartaoClient<runtime.Types.Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Cartao.
     * @param {CartaoUpdateArgs} args - Arguments to update one Cartao.
     * @example
     * // Update one Cartao
     * const cartao = await prisma.cartao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CartaoUpdateArgs>(args: Prisma.SelectSubset<T, CartaoUpdateArgs<ExtArgs>>): Prisma.Prisma__CartaoClient<runtime.Types.Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Cartaos.
     * @param {CartaoDeleteManyArgs} args - Arguments to filter Cartaos to delete.
     * @example
     * // Delete a few Cartaos
     * const { count } = await prisma.cartao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CartaoDeleteManyArgs>(args?: Prisma.SelectSubset<T, CartaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cartaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cartaos
     * const cartao = await prisma.cartao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CartaoUpdateManyArgs>(args: Prisma.SelectSubset<T, CartaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cartaos and returns the data updated in the database.
     * @param {CartaoUpdateManyAndReturnArgs} args - Arguments to update many Cartaos.
     * @example
     * // Update many Cartaos
     * const cartao = await prisma.cartao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Cartaos and only return the `id`
     * const cartaoWithIdOnly = await prisma.cartao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CartaoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CartaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Cartao.
     * @param {CartaoUpsertArgs} args - Arguments to update or create a Cartao.
     * @example
     * // Update or create a Cartao
     * const cartao = await prisma.cartao.upsert({
     *   create: {
     *     // ... data to create a Cartao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cartao we want to update
     *   }
     * })
     */
    upsert<T extends CartaoUpsertArgs>(args: Prisma.SelectSubset<T, CartaoUpsertArgs<ExtArgs>>): Prisma.Prisma__CartaoClient<runtime.Types.Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Cartaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoCountArgs} args - Arguments to filter Cartaos to count.
     * @example
     * // Count the number of Cartaos
     * const count = await prisma.cartao.count({
     *   where: {
     *     // ... the filter for the Cartaos we want to count
     *   }
     * })
    **/
    count<T extends CartaoCountArgs>(args?: Prisma.Subset<T, CartaoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CartaoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Cartao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartaoAggregateArgs>(args: Prisma.Subset<T, CartaoAggregateArgs>): Prisma.PrismaPromise<GetCartaoAggregateType<T>>;
    /**
     * Group by Cartao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends CartaoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CartaoGroupByArgs['orderBy'];
    } : {
        orderBy?: CartaoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CartaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Cartao model
     */
    readonly fields: CartaoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Cartao.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CartaoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Cartao model
 */
export interface CartaoFieldRefs {
    readonly id: Prisma.FieldRef<"Cartao", 'String'>;
    readonly nomeTitular: Prisma.FieldRef<"Cartao", 'String'>;
    readonly cpfTitular: Prisma.FieldRef<"Cartao", 'String'>;
    readonly cardNumber: Prisma.FieldRef<"Cartao", 'String'>;
    readonly date: Prisma.FieldRef<"Cartao", 'String'>;
    readonly cvv: Prisma.FieldRef<"Cartao", 'String'>;
    readonly salvoEm: Prisma.FieldRef<"Cartao", 'DateTime'>;
}
/**
 * Cartao findUnique
 */
export type CartaoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
    /**
     * Filter, which Cartao to fetch.
     */
    where: Prisma.CartaoWhereUniqueInput;
};
/**
 * Cartao findUniqueOrThrow
 */
export type CartaoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
    /**
     * Filter, which Cartao to fetch.
     */
    where: Prisma.CartaoWhereUniqueInput;
};
/**
 * Cartao findFirst
 */
export type CartaoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
    /**
     * Filter, which Cartao to fetch.
     */
    where?: Prisma.CartaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: Prisma.CartaoOrderByWithRelationInput | Prisma.CartaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cartaos.
     */
    cursor?: Prisma.CartaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cartaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cartaos.
     */
    distinct?: Prisma.CartaoScalarFieldEnum | Prisma.CartaoScalarFieldEnum[];
};
/**
 * Cartao findFirstOrThrow
 */
export type CartaoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
    /**
     * Filter, which Cartao to fetch.
     */
    where?: Prisma.CartaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: Prisma.CartaoOrderByWithRelationInput | Prisma.CartaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cartaos.
     */
    cursor?: Prisma.CartaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cartaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cartaos.
     */
    distinct?: Prisma.CartaoScalarFieldEnum | Prisma.CartaoScalarFieldEnum[];
};
/**
 * Cartao findMany
 */
export type CartaoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
    /**
     * Filter, which Cartaos to fetch.
     */
    where?: Prisma.CartaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: Prisma.CartaoOrderByWithRelationInput | Prisma.CartaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Cartaos.
     */
    cursor?: Prisma.CartaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cartaos.
     */
    skip?: number;
    distinct?: Prisma.CartaoScalarFieldEnum | Prisma.CartaoScalarFieldEnum[];
};
/**
 * Cartao create
 */
export type CartaoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
    /**
     * The data needed to create a Cartao.
     */
    data: Prisma.XOR<Prisma.CartaoCreateInput, Prisma.CartaoUncheckedCreateInput>;
};
/**
 * Cartao createMany
 */
export type CartaoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cartaos.
     */
    data: Prisma.CartaoCreateManyInput | Prisma.CartaoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Cartao createManyAndReturn
 */
export type CartaoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
    /**
     * The data used to create many Cartaos.
     */
    data: Prisma.CartaoCreateManyInput | Prisma.CartaoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Cartao update
 */
export type CartaoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
    /**
     * The data needed to update a Cartao.
     */
    data: Prisma.XOR<Prisma.CartaoUpdateInput, Prisma.CartaoUncheckedUpdateInput>;
    /**
     * Choose, which Cartao to update.
     */
    where: Prisma.CartaoWhereUniqueInput;
};
/**
 * Cartao updateMany
 */
export type CartaoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Cartaos.
     */
    data: Prisma.XOR<Prisma.CartaoUpdateManyMutationInput, Prisma.CartaoUncheckedUpdateManyInput>;
    /**
     * Filter which Cartaos to update
     */
    where?: Prisma.CartaoWhereInput;
    /**
     * Limit how many Cartaos to update.
     */
    limit?: number;
};
/**
 * Cartao updateManyAndReturn
 */
export type CartaoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
    /**
     * The data used to update Cartaos.
     */
    data: Prisma.XOR<Prisma.CartaoUpdateManyMutationInput, Prisma.CartaoUncheckedUpdateManyInput>;
    /**
     * Filter which Cartaos to update
     */
    where?: Prisma.CartaoWhereInput;
    /**
     * Limit how many Cartaos to update.
     */
    limit?: number;
};
/**
 * Cartao upsert
 */
export type CartaoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
    /**
     * The filter to search for the Cartao to update in case it exists.
     */
    where: Prisma.CartaoWhereUniqueInput;
    /**
     * In case the Cartao found by the `where` argument doesn't exist, create a new Cartao with this data.
     */
    create: Prisma.XOR<Prisma.CartaoCreateInput, Prisma.CartaoUncheckedCreateInput>;
    /**
     * In case the Cartao was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CartaoUpdateInput, Prisma.CartaoUncheckedUpdateInput>;
};
/**
 * Cartao delete
 */
export type CartaoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
    /**
     * Filter which Cartao to delete.
     */
    where: Prisma.CartaoWhereUniqueInput;
};
/**
 * Cartao deleteMany
 */
export type CartaoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Cartaos to delete
     */
    where?: Prisma.CartaoWhereInput;
    /**
     * Limit how many Cartaos to delete.
     */
    limit?: number;
};
/**
 * Cartao without action
 */
export type CartaoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: Prisma.CartaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cartao
     */
    omit?: Prisma.CartaoOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Cartao.d.ts.map