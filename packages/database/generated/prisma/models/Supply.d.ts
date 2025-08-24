import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type SupplyModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplyPayload>;
export type AggregateSupply = {
    _count: SupplyCountAggregateOutputType | null;
    _avg: SupplyAvgAggregateOutputType | null;
    _sum: SupplySumAggregateOutputType | null;
    _min: SupplyMinAggregateOutputType | null;
    _max: SupplyMaxAggregateOutputType | null;
};
export type SupplyAvgAggregateOutputType = {
    id: number | null;
    quantity: number | null;
    price: number | null;
};
export type SupplySumAggregateOutputType = {
    id: number | null;
    quantity: number | null;
    price: number | null;
};
export type SupplyMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    quantity: number | null;
    unit: string | null;
    price: number | null;
};
export type SupplyMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    quantity: number | null;
    unit: string | null;
    price: number | null;
};
export type SupplyCountAggregateOutputType = {
    id: number;
    name: number;
    quantity: number;
    unit: number;
    price: number;
    _all: number;
};
export type SupplyAvgAggregateInputType = {
    id?: true;
    quantity?: true;
    price?: true;
};
export type SupplySumAggregateInputType = {
    id?: true;
    quantity?: true;
    price?: true;
};
export type SupplyMinAggregateInputType = {
    id?: true;
    name?: true;
    quantity?: true;
    unit?: true;
    price?: true;
};
export type SupplyMaxAggregateInputType = {
    id?: true;
    name?: true;
    quantity?: true;
    unit?: true;
    price?: true;
};
export type SupplyCountAggregateInputType = {
    id?: true;
    name?: true;
    quantity?: true;
    unit?: true;
    price?: true;
    _all?: true;
};
export type SupplyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplyWhereInput;
    orderBy?: Prisma.SupplyOrderByWithRelationInput | Prisma.SupplyOrderByWithRelationInput[];
    cursor?: Prisma.SupplyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SupplyCountAggregateInputType;
    _avg?: SupplyAvgAggregateInputType;
    _sum?: SupplySumAggregateInputType;
    _min?: SupplyMinAggregateInputType;
    _max?: SupplyMaxAggregateInputType;
};
export type GetSupplyAggregateType<T extends SupplyAggregateArgs> = {
    [P in keyof T & keyof AggregateSupply]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupply[P]> : Prisma.GetScalarType<T[P], AggregateSupply[P]>;
};
export type SupplyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplyWhereInput;
    orderBy?: Prisma.SupplyOrderByWithAggregationInput | Prisma.SupplyOrderByWithAggregationInput[];
    by: Prisma.SupplyScalarFieldEnum[] | Prisma.SupplyScalarFieldEnum;
    having?: Prisma.SupplyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplyCountAggregateInputType | true;
    _avg?: SupplyAvgAggregateInputType;
    _sum?: SupplySumAggregateInputType;
    _min?: SupplyMinAggregateInputType;
    _max?: SupplyMaxAggregateInputType;
};
export type SupplyGroupByOutputType = {
    id: number;
    name: string;
    quantity: number;
    unit: string;
    price: number;
    _count: SupplyCountAggregateOutputType | null;
    _avg: SupplyAvgAggregateOutputType | null;
    _sum: SupplySumAggregateOutputType | null;
    _min: SupplyMinAggregateOutputType | null;
    _max: SupplyMaxAggregateOutputType | null;
};
type GetSupplyGroupByPayload<T extends SupplyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplyGroupByOutputType[P]>;
}>>;
export type SupplyWhereInput = {
    AND?: Prisma.SupplyWhereInput | Prisma.SupplyWhereInput[];
    OR?: Prisma.SupplyWhereInput[];
    NOT?: Prisma.SupplyWhereInput | Prisma.SupplyWhereInput[];
    id?: Prisma.IntFilter<"Supply"> | number;
    name?: Prisma.StringFilter<"Supply"> | string;
    quantity?: Prisma.FloatFilter<"Supply"> | number;
    unit?: Prisma.StringFilter<"Supply"> | string;
    price?: Prisma.FloatFilter<"Supply"> | number;
    SupplyContract?: Prisma.SupplyContractListRelationFilter;
};
export type SupplyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    SupplyContract?: Prisma.SupplyContractOrderByRelationAggregateInput;
};
export type SupplyWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.SupplyWhereInput | Prisma.SupplyWhereInput[];
    OR?: Prisma.SupplyWhereInput[];
    NOT?: Prisma.SupplyWhereInput | Prisma.SupplyWhereInput[];
    quantity?: Prisma.FloatFilter<"Supply"> | number;
    unit?: Prisma.StringFilter<"Supply"> | string;
    price?: Prisma.FloatFilter<"Supply"> | number;
    SupplyContract?: Prisma.SupplyContractListRelationFilter;
}, "id" | "name">;
export type SupplyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    _count?: Prisma.SupplyCountOrderByAggregateInput;
    _avg?: Prisma.SupplyAvgOrderByAggregateInput;
    _max?: Prisma.SupplyMaxOrderByAggregateInput;
    _min?: Prisma.SupplyMinOrderByAggregateInput;
    _sum?: Prisma.SupplySumOrderByAggregateInput;
};
export type SupplyScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplyScalarWhereWithAggregatesInput | Prisma.SupplyScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplyScalarWhereWithAggregatesInput | Prisma.SupplyScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Supply"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Supply"> | string;
    quantity?: Prisma.FloatWithAggregatesFilter<"Supply"> | number;
    unit?: Prisma.StringWithAggregatesFilter<"Supply"> | string;
    price?: Prisma.FloatWithAggregatesFilter<"Supply"> | number;
};
export type SupplyCreateInput = {
    name: string;
    quantity: number;
    unit: string;
    price: number;
    SupplyContract?: Prisma.SupplyContractCreateNestedManyWithoutSupplyInput;
};
export type SupplyUncheckedCreateInput = {
    id?: number;
    name: string;
    quantity: number;
    unit: string;
    price: number;
    SupplyContract?: Prisma.SupplyContractUncheckedCreateNestedManyWithoutSupplyInput;
};
export type SupplyUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    SupplyContract?: Prisma.SupplyContractUpdateManyWithoutSupplyNestedInput;
};
export type SupplyUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    SupplyContract?: Prisma.SupplyContractUncheckedUpdateManyWithoutSupplyNestedInput;
};
export type SupplyCreateManyInput = {
    id?: number;
    name: string;
    quantity: number;
    unit: string;
    price: number;
};
export type SupplyUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type SupplyUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type SupplyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type SupplyAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type SupplyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type SupplyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type SupplySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type SupplyScalarRelationFilter = {
    is?: Prisma.SupplyWhereInput;
    isNot?: Prisma.SupplyWhereInput;
};
export type SupplyCreateNestedOneWithoutSupplyContractInput = {
    create?: Prisma.XOR<Prisma.SupplyCreateWithoutSupplyContractInput, Prisma.SupplyUncheckedCreateWithoutSupplyContractInput>;
    connectOrCreate?: Prisma.SupplyCreateOrConnectWithoutSupplyContractInput;
    connect?: Prisma.SupplyWhereUniqueInput;
};
export type SupplyUpdateOneRequiredWithoutSupplyContractNestedInput = {
    create?: Prisma.XOR<Prisma.SupplyCreateWithoutSupplyContractInput, Prisma.SupplyUncheckedCreateWithoutSupplyContractInput>;
    connectOrCreate?: Prisma.SupplyCreateOrConnectWithoutSupplyContractInput;
    upsert?: Prisma.SupplyUpsertWithoutSupplyContractInput;
    connect?: Prisma.SupplyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplyUpdateToOneWithWhereWithoutSupplyContractInput, Prisma.SupplyUpdateWithoutSupplyContractInput>, Prisma.SupplyUncheckedUpdateWithoutSupplyContractInput>;
};
export type SupplyCreateWithoutSupplyContractInput = {
    name: string;
    quantity: number;
    unit: string;
    price: number;
};
export type SupplyUncheckedCreateWithoutSupplyContractInput = {
    id?: number;
    name: string;
    quantity: number;
    unit: string;
    price: number;
};
export type SupplyCreateOrConnectWithoutSupplyContractInput = {
    where: Prisma.SupplyWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplyCreateWithoutSupplyContractInput, Prisma.SupplyUncheckedCreateWithoutSupplyContractInput>;
};
export type SupplyUpsertWithoutSupplyContractInput = {
    update: Prisma.XOR<Prisma.SupplyUpdateWithoutSupplyContractInput, Prisma.SupplyUncheckedUpdateWithoutSupplyContractInput>;
    create: Prisma.XOR<Prisma.SupplyCreateWithoutSupplyContractInput, Prisma.SupplyUncheckedCreateWithoutSupplyContractInput>;
    where?: Prisma.SupplyWhereInput;
};
export type SupplyUpdateToOneWithWhereWithoutSupplyContractInput = {
    where?: Prisma.SupplyWhereInput;
    data: Prisma.XOR<Prisma.SupplyUpdateWithoutSupplyContractInput, Prisma.SupplyUncheckedUpdateWithoutSupplyContractInput>;
};
export type SupplyUpdateWithoutSupplyContractInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type SupplyUncheckedUpdateWithoutSupplyContractInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type SupplyCountOutputType = {
    SupplyContract: number;
};
export type SupplyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    SupplyContract?: boolean | SupplyCountOutputTypeCountSupplyContractArgs;
};
export type SupplyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplyCountOutputTypeSelect<ExtArgs> | null;
};
export type SupplyCountOutputTypeCountSupplyContractArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplyContractWhereInput;
};
export type SupplySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    quantity?: boolean;
    unit?: boolean;
    price?: boolean;
    SupplyContract?: boolean | Prisma.Supply$SupplyContractArgs<ExtArgs>;
    _count?: boolean | Prisma.SupplyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supply"]>;
export type SupplySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    quantity?: boolean;
    unit?: boolean;
    price?: boolean;
}, ExtArgs["result"]["supply"]>;
export type SupplySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    quantity?: boolean;
    unit?: boolean;
    price?: boolean;
}, ExtArgs["result"]["supply"]>;
export type SupplySelectScalar = {
    id?: boolean;
    name?: boolean;
    quantity?: boolean;
    unit?: boolean;
    price?: boolean;
};
export type SupplyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "quantity" | "unit" | "price", ExtArgs["result"]["supply"]>;
export type SupplyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    SupplyContract?: boolean | Prisma.Supply$SupplyContractArgs<ExtArgs>;
    _count?: boolean | Prisma.SupplyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SupplyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SupplyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SupplyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Supply";
    objects: {
        SupplyContract: Prisma.$SupplyContractPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        quantity: number;
        unit: string;
        price: number;
    }, ExtArgs["result"]["supply"]>;
    composites: {};
};
export type SupplyGetPayload<S extends boolean | null | undefined | SupplyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplyPayload, S>;
export type SupplyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplyCountAggregateInputType | true;
};
export interface SupplyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Supply'];
        meta: {
            name: 'Supply';
        };
    };
    findUnique<T extends SupplyFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplyClient<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SupplyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplyClient<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SupplyFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplyFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplyClient<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SupplyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplyClient<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SupplyFindManyArgs>(args?: Prisma.SelectSubset<T, SupplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SupplyCreateArgs>(args: Prisma.SelectSubset<T, SupplyCreateArgs<ExtArgs>>): Prisma.Prisma__SupplyClient<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SupplyCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SupplyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SupplyDeleteArgs>(args: Prisma.SelectSubset<T, SupplyDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplyClient<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SupplyUpdateArgs>(args: Prisma.SelectSubset<T, SupplyUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplyClient<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SupplyDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SupplyUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SupplyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SupplyUpsertArgs>(args: Prisma.SelectSubset<T, SupplyUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplyClient<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SupplyCountArgs>(args?: Prisma.Subset<T, SupplyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplyCountAggregateOutputType> : number>;
    aggregate<T extends SupplyAggregateArgs>(args: Prisma.Subset<T, SupplyAggregateArgs>): Prisma.PrismaPromise<GetSupplyAggregateType<T>>;
    groupBy<T extends SupplyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplyGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SupplyFieldRefs;
}
export interface Prisma__SupplyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    SupplyContract<T extends Prisma.Supply$SupplyContractArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Supply$SupplyContractArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SupplyFieldRefs {
    readonly id: Prisma.FieldRef<"Supply", 'Int'>;
    readonly name: Prisma.FieldRef<"Supply", 'String'>;
    readonly quantity: Prisma.FieldRef<"Supply", 'Float'>;
    readonly unit: Prisma.FieldRef<"Supply", 'String'>;
    readonly price: Prisma.FieldRef<"Supply", 'Float'>;
}
export type SupplyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelect<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    include?: Prisma.SupplyInclude<ExtArgs> | null;
    where: Prisma.SupplyWhereUniqueInput;
};
export type SupplyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelect<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    include?: Prisma.SupplyInclude<ExtArgs> | null;
    where: Prisma.SupplyWhereUniqueInput;
};
export type SupplyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelect<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    include?: Prisma.SupplyInclude<ExtArgs> | null;
    where?: Prisma.SupplyWhereInput;
    orderBy?: Prisma.SupplyOrderByWithRelationInput | Prisma.SupplyOrderByWithRelationInput[];
    cursor?: Prisma.SupplyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplyScalarFieldEnum | Prisma.SupplyScalarFieldEnum[];
};
export type SupplyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelect<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    include?: Prisma.SupplyInclude<ExtArgs> | null;
    where?: Prisma.SupplyWhereInput;
    orderBy?: Prisma.SupplyOrderByWithRelationInput | Prisma.SupplyOrderByWithRelationInput[];
    cursor?: Prisma.SupplyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplyScalarFieldEnum | Prisma.SupplyScalarFieldEnum[];
};
export type SupplyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelect<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    include?: Prisma.SupplyInclude<ExtArgs> | null;
    where?: Prisma.SupplyWhereInput;
    orderBy?: Prisma.SupplyOrderByWithRelationInput | Prisma.SupplyOrderByWithRelationInput[];
    cursor?: Prisma.SupplyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplyScalarFieldEnum | Prisma.SupplyScalarFieldEnum[];
};
export type SupplyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelect<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    include?: Prisma.SupplyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupplyCreateInput, Prisma.SupplyUncheckedCreateInput>;
};
export type SupplyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SupplyCreateManyInput | Prisma.SupplyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SupplyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    data: Prisma.SupplyCreateManyInput | Prisma.SupplyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SupplyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelect<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    include?: Prisma.SupplyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupplyUpdateInput, Prisma.SupplyUncheckedUpdateInput>;
    where: Prisma.SupplyWhereUniqueInput;
};
export type SupplyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SupplyUpdateManyMutationInput, Prisma.SupplyUncheckedUpdateManyInput>;
    where?: Prisma.SupplyWhereInput;
    limit?: number;
};
export type SupplyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupplyUpdateManyMutationInput, Prisma.SupplyUncheckedUpdateManyInput>;
    where?: Prisma.SupplyWhereInput;
    limit?: number;
};
export type SupplyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelect<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    include?: Prisma.SupplyInclude<ExtArgs> | null;
    where: Prisma.SupplyWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplyCreateInput, Prisma.SupplyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SupplyUpdateInput, Prisma.SupplyUncheckedUpdateInput>;
};
export type SupplyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelect<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    include?: Prisma.SupplyInclude<ExtArgs> | null;
    where: Prisma.SupplyWhereUniqueInput;
};
export type SupplyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplyWhereInput;
    limit?: number;
};
export type Supply$SupplyContractArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplyContractSelect<ExtArgs> | null;
    omit?: Prisma.SupplyContractOmit<ExtArgs> | null;
    include?: Prisma.SupplyContractInclude<ExtArgs> | null;
    where?: Prisma.SupplyContractWhereInput;
    orderBy?: Prisma.SupplyContractOrderByWithRelationInput | Prisma.SupplyContractOrderByWithRelationInput[];
    cursor?: Prisma.SupplyContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplyContractScalarFieldEnum | Prisma.SupplyContractScalarFieldEnum[];
};
export type SupplyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplySelect<ExtArgs> | null;
    omit?: Prisma.SupplyOmit<ExtArgs> | null;
    include?: Prisma.SupplyInclude<ExtArgs> | null;
};
export {};
