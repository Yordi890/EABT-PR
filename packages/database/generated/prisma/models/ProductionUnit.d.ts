import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type ProductionUnitModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductionUnitPayload>;
export type AggregateProductionUnit = {
    _count: ProductionUnitCountAggregateOutputType | null;
    _avg: ProductionUnitAvgAggregateOutputType | null;
    _sum: ProductionUnitSumAggregateOutputType | null;
    _min: ProductionUnitMinAggregateOutputType | null;
    _max: ProductionUnitMaxAggregateOutputType | null;
};
export type ProductionUnitAvgAggregateOutputType = {
    id: number | null;
};
export type ProductionUnitSumAggregateOutputType = {
    id: number | null;
};
export type ProductionUnitMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    address: string | null;
};
export type ProductionUnitMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    address: string | null;
};
export type ProductionUnitCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    _all: number;
};
export type ProductionUnitAvgAggregateInputType = {
    id?: true;
};
export type ProductionUnitSumAggregateInputType = {
    id?: true;
};
export type ProductionUnitMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
};
export type ProductionUnitMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
};
export type ProductionUnitCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    _all?: true;
};
export type ProductionUnitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductionUnitWhereInput;
    orderBy?: Prisma.ProductionUnitOrderByWithRelationInput | Prisma.ProductionUnitOrderByWithRelationInput[];
    cursor?: Prisma.ProductionUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductionUnitCountAggregateInputType;
    _avg?: ProductionUnitAvgAggregateInputType;
    _sum?: ProductionUnitSumAggregateInputType;
    _min?: ProductionUnitMinAggregateInputType;
    _max?: ProductionUnitMaxAggregateInputType;
};
export type GetProductionUnitAggregateType<T extends ProductionUnitAggregateArgs> = {
    [P in keyof T & keyof AggregateProductionUnit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductionUnit[P]> : Prisma.GetScalarType<T[P], AggregateProductionUnit[P]>;
};
export type ProductionUnitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductionUnitWhereInput;
    orderBy?: Prisma.ProductionUnitOrderByWithAggregationInput | Prisma.ProductionUnitOrderByWithAggregationInput[];
    by: Prisma.ProductionUnitScalarFieldEnum[] | Prisma.ProductionUnitScalarFieldEnum;
    having?: Prisma.ProductionUnitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductionUnitCountAggregateInputType | true;
    _avg?: ProductionUnitAvgAggregateInputType;
    _sum?: ProductionUnitSumAggregateInputType;
    _min?: ProductionUnitMinAggregateInputType;
    _max?: ProductionUnitMaxAggregateInputType;
};
export type ProductionUnitGroupByOutputType = {
    id: number;
    name: string;
    address: string;
    _count: ProductionUnitCountAggregateOutputType | null;
    _avg: ProductionUnitAvgAggregateOutputType | null;
    _sum: ProductionUnitSumAggregateOutputType | null;
    _min: ProductionUnitMinAggregateOutputType | null;
    _max: ProductionUnitMaxAggregateOutputType | null;
};
type GetProductionUnitGroupByPayload<T extends ProductionUnitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductionUnitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductionUnitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductionUnitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductionUnitGroupByOutputType[P]>;
}>>;
export type ProductionUnitWhereInput = {
    AND?: Prisma.ProductionUnitWhereInput | Prisma.ProductionUnitWhereInput[];
    OR?: Prisma.ProductionUnitWhereInput[];
    NOT?: Prisma.ProductionUnitWhereInput | Prisma.ProductionUnitWhereInput[];
    id?: Prisma.IntFilter<"ProductionUnit"> | number;
    name?: Prisma.StringFilter<"ProductionUnit"> | string;
    address?: Prisma.StringFilter<"ProductionUnit"> | string;
    producers?: Prisma.ProducerListRelationFilter;
};
export type ProductionUnitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    producers?: Prisma.ProducerOrderByRelationAggregateInput;
};
export type ProductionUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.ProductionUnitWhereInput | Prisma.ProductionUnitWhereInput[];
    OR?: Prisma.ProductionUnitWhereInput[];
    NOT?: Prisma.ProductionUnitWhereInput | Prisma.ProductionUnitWhereInput[];
    address?: Prisma.StringFilter<"ProductionUnit"> | string;
    producers?: Prisma.ProducerListRelationFilter;
}, "id" | "name">;
export type ProductionUnitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    _count?: Prisma.ProductionUnitCountOrderByAggregateInput;
    _avg?: Prisma.ProductionUnitAvgOrderByAggregateInput;
    _max?: Prisma.ProductionUnitMaxOrderByAggregateInput;
    _min?: Prisma.ProductionUnitMinOrderByAggregateInput;
    _sum?: Prisma.ProductionUnitSumOrderByAggregateInput;
};
export type ProductionUnitScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductionUnitScalarWhereWithAggregatesInput | Prisma.ProductionUnitScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductionUnitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductionUnitScalarWhereWithAggregatesInput | Prisma.ProductionUnitScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ProductionUnit"> | number;
    name?: Prisma.StringWithAggregatesFilter<"ProductionUnit"> | string;
    address?: Prisma.StringWithAggregatesFilter<"ProductionUnit"> | string;
};
export type ProductionUnitCreateInput = {
    name: string;
    address: string;
    producers?: Prisma.ProducerCreateNestedManyWithoutProductionUnitInput;
};
export type ProductionUnitUncheckedCreateInput = {
    id?: number;
    name: string;
    address: string;
    producers?: Prisma.ProducerUncheckedCreateNestedManyWithoutProductionUnitInput;
};
export type ProductionUnitUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    producers?: Prisma.ProducerUpdateManyWithoutProductionUnitNestedInput;
};
export type ProductionUnitUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    producers?: Prisma.ProducerUncheckedUpdateManyWithoutProductionUnitNestedInput;
};
export type ProductionUnitCreateManyInput = {
    id?: number;
    name: string;
    address: string;
};
export type ProductionUnitUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductionUnitUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductionUnitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
};
export type ProductionUnitAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProductionUnitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
};
export type ProductionUnitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
};
export type ProductionUnitSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProductionUnitNullableScalarRelationFilter = {
    is?: Prisma.ProductionUnitWhereInput | null;
    isNot?: Prisma.ProductionUnitWhereInput | null;
};
export type ProductionUnitCreateNestedOneWithoutProducersInput = {
    create?: Prisma.XOR<Prisma.ProductionUnitCreateWithoutProducersInput, Prisma.ProductionUnitUncheckedCreateWithoutProducersInput>;
    connectOrCreate?: Prisma.ProductionUnitCreateOrConnectWithoutProducersInput;
    connect?: Prisma.ProductionUnitWhereUniqueInput;
};
export type ProductionUnitUpdateOneWithoutProducersNestedInput = {
    create?: Prisma.XOR<Prisma.ProductionUnitCreateWithoutProducersInput, Prisma.ProductionUnitUncheckedCreateWithoutProducersInput>;
    connectOrCreate?: Prisma.ProductionUnitCreateOrConnectWithoutProducersInput;
    upsert?: Prisma.ProductionUnitUpsertWithoutProducersInput;
    disconnect?: Prisma.ProductionUnitWhereInput | boolean;
    delete?: Prisma.ProductionUnitWhereInput | boolean;
    connect?: Prisma.ProductionUnitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductionUnitUpdateToOneWithWhereWithoutProducersInput, Prisma.ProductionUnitUpdateWithoutProducersInput>, Prisma.ProductionUnitUncheckedUpdateWithoutProducersInput>;
};
export type ProductionUnitCreateWithoutProducersInput = {
    name: string;
    address: string;
};
export type ProductionUnitUncheckedCreateWithoutProducersInput = {
    id?: number;
    name: string;
    address: string;
};
export type ProductionUnitCreateOrConnectWithoutProducersInput = {
    where: Prisma.ProductionUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductionUnitCreateWithoutProducersInput, Prisma.ProductionUnitUncheckedCreateWithoutProducersInput>;
};
export type ProductionUnitUpsertWithoutProducersInput = {
    update: Prisma.XOR<Prisma.ProductionUnitUpdateWithoutProducersInput, Prisma.ProductionUnitUncheckedUpdateWithoutProducersInput>;
    create: Prisma.XOR<Prisma.ProductionUnitCreateWithoutProducersInput, Prisma.ProductionUnitUncheckedCreateWithoutProducersInput>;
    where?: Prisma.ProductionUnitWhereInput;
};
export type ProductionUnitUpdateToOneWithWhereWithoutProducersInput = {
    where?: Prisma.ProductionUnitWhereInput;
    data: Prisma.XOR<Prisma.ProductionUnitUpdateWithoutProducersInput, Prisma.ProductionUnitUncheckedUpdateWithoutProducersInput>;
};
export type ProductionUnitUpdateWithoutProducersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductionUnitUncheckedUpdateWithoutProducersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductionUnitCountOutputType = {
    producers: number;
};
export type ProductionUnitCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producers?: boolean | ProductionUnitCountOutputTypeCountProducersArgs;
};
export type ProductionUnitCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductionUnitCountOutputTypeCountProducersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProducerWhereInput;
};
export type ProductionUnitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    address?: boolean;
    producers?: boolean | Prisma.ProductionUnit$producersArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductionUnitCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productionUnit"]>;
export type ProductionUnitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    address?: boolean;
}, ExtArgs["result"]["productionUnit"]>;
export type ProductionUnitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    address?: boolean;
}, ExtArgs["result"]["productionUnit"]>;
export type ProductionUnitSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
};
export type ProductionUnitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "address", ExtArgs["result"]["productionUnit"]>;
export type ProductionUnitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producers?: boolean | Prisma.ProductionUnit$producersArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductionUnitCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductionUnitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProductionUnitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProductionUnitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductionUnit";
    objects: {
        producers: Prisma.$ProducerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        address: string;
    }, ExtArgs["result"]["productionUnit"]>;
    composites: {};
};
export type ProductionUnitGetPayload<S extends boolean | null | undefined | ProductionUnitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload, S>;
export type ProductionUnitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductionUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductionUnitCountAggregateInputType | true;
};
export interface ProductionUnitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductionUnit'];
        meta: {
            name: 'ProductionUnit';
        };
    };
    findUnique<T extends ProductionUnitFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductionUnitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductionUnitClient<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductionUnitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductionUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductionUnitClient<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductionUnitFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductionUnitFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductionUnitClient<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductionUnitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductionUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductionUnitClient<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductionUnitFindManyArgs>(args?: Prisma.SelectSubset<T, ProductionUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductionUnitCreateArgs>(args: Prisma.SelectSubset<T, ProductionUnitCreateArgs<ExtArgs>>): Prisma.Prisma__ProductionUnitClient<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductionUnitCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductionUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductionUnitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductionUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductionUnitDeleteArgs>(args: Prisma.SelectSubset<T, ProductionUnitDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductionUnitClient<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductionUnitUpdateArgs>(args: Prisma.SelectSubset<T, ProductionUnitUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductionUnitClient<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductionUnitDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductionUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductionUnitUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductionUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductionUnitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductionUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductionUnitUpsertArgs>(args: Prisma.SelectSubset<T, ProductionUnitUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductionUnitClient<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductionUnitCountArgs>(args?: Prisma.Subset<T, ProductionUnitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductionUnitCountAggregateOutputType> : number>;
    aggregate<T extends ProductionUnitAggregateArgs>(args: Prisma.Subset<T, ProductionUnitAggregateArgs>): Prisma.PrismaPromise<GetProductionUnitAggregateType<T>>;
    groupBy<T extends ProductionUnitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductionUnitGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductionUnitGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductionUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductionUnitFieldRefs;
}
export interface Prisma__ProductionUnitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    producers<T extends Prisma.ProductionUnit$producersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductionUnit$producersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductionUnitFieldRefs {
    readonly id: Prisma.FieldRef<"ProductionUnit", 'Int'>;
    readonly name: Prisma.FieldRef<"ProductionUnit", 'String'>;
    readonly address: Prisma.FieldRef<"ProductionUnit", 'String'>;
}
export type ProductionUnitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
    where: Prisma.ProductionUnitWhereUniqueInput;
};
export type ProductionUnitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
    where: Prisma.ProductionUnitWhereUniqueInput;
};
export type ProductionUnitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
    where?: Prisma.ProductionUnitWhereInput;
    orderBy?: Prisma.ProductionUnitOrderByWithRelationInput | Prisma.ProductionUnitOrderByWithRelationInput[];
    cursor?: Prisma.ProductionUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductionUnitScalarFieldEnum | Prisma.ProductionUnitScalarFieldEnum[];
};
export type ProductionUnitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
    where?: Prisma.ProductionUnitWhereInput;
    orderBy?: Prisma.ProductionUnitOrderByWithRelationInput | Prisma.ProductionUnitOrderByWithRelationInput[];
    cursor?: Prisma.ProductionUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductionUnitScalarFieldEnum | Prisma.ProductionUnitScalarFieldEnum[];
};
export type ProductionUnitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
    where?: Prisma.ProductionUnitWhereInput;
    orderBy?: Prisma.ProductionUnitOrderByWithRelationInput | Prisma.ProductionUnitOrderByWithRelationInput[];
    cursor?: Prisma.ProductionUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductionUnitScalarFieldEnum | Prisma.ProductionUnitScalarFieldEnum[];
};
export type ProductionUnitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductionUnitCreateInput, Prisma.ProductionUnitUncheckedCreateInput>;
};
export type ProductionUnitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductionUnitCreateManyInput | Prisma.ProductionUnitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductionUnitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    data: Prisma.ProductionUnitCreateManyInput | Prisma.ProductionUnitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductionUnitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductionUnitUpdateInput, Prisma.ProductionUnitUncheckedUpdateInput>;
    where: Prisma.ProductionUnitWhereUniqueInput;
};
export type ProductionUnitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductionUnitUpdateManyMutationInput, Prisma.ProductionUnitUncheckedUpdateManyInput>;
    where?: Prisma.ProductionUnitWhereInput;
    limit?: number;
};
export type ProductionUnitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductionUnitUpdateManyMutationInput, Prisma.ProductionUnitUncheckedUpdateManyInput>;
    where?: Prisma.ProductionUnitWhereInput;
    limit?: number;
};
export type ProductionUnitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
    where: Prisma.ProductionUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductionUnitCreateInput, Prisma.ProductionUnitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductionUnitUpdateInput, Prisma.ProductionUnitUncheckedUpdateInput>;
};
export type ProductionUnitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
    where: Prisma.ProductionUnitWhereUniqueInput;
};
export type ProductionUnitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductionUnitWhereInput;
    limit?: number;
};
export type ProductionUnit$producersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where?: Prisma.ProducerWhereInput;
    orderBy?: Prisma.ProducerOrderByWithRelationInput | Prisma.ProducerOrderByWithRelationInput[];
    cursor?: Prisma.ProducerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProducerScalarFieldEnum | Prisma.ProducerScalarFieldEnum[];
};
export type ProductionUnitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
};
export {};
