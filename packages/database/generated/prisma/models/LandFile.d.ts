import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type LandFileModel = runtime.Types.Result.DefaultSelection<Prisma.$LandFilePayload>;
export type AggregateLandFile = {
    _count: LandFileCountAggregateOutputType | null;
    _avg: LandFileAvgAggregateOutputType | null;
    _sum: LandFileSumAggregateOutputType | null;
    _min: LandFileMinAggregateOutputType | null;
    _max: LandFileMaxAggregateOutputType | null;
};
export type LandFileAvgAggregateOutputType = {
    id: number | null;
    area: number | null;
};
export type LandFileSumAggregateOutputType = {
    id: number | null;
    area: number | null;
};
export type LandFileMinAggregateOutputType = {
    id: number | null;
    producerdni: string | null;
    fileNumber: string | null;
    area: number | null;
    propertyType: string | null;
    issueDate: string | null;
    expirationDate: string | null;
};
export type LandFileMaxAggregateOutputType = {
    id: number | null;
    producerdni: string | null;
    fileNumber: string | null;
    area: number | null;
    propertyType: string | null;
    issueDate: string | null;
    expirationDate: string | null;
};
export type LandFileCountAggregateOutputType = {
    id: number;
    producerdni: number;
    fileNumber: number;
    area: number;
    propertyType: number;
    issueDate: number;
    expirationDate: number;
    _all: number;
};
export type LandFileAvgAggregateInputType = {
    id?: true;
    area?: true;
};
export type LandFileSumAggregateInputType = {
    id?: true;
    area?: true;
};
export type LandFileMinAggregateInputType = {
    id?: true;
    producerdni?: true;
    fileNumber?: true;
    area?: true;
    propertyType?: true;
    issueDate?: true;
    expirationDate?: true;
};
export type LandFileMaxAggregateInputType = {
    id?: true;
    producerdni?: true;
    fileNumber?: true;
    area?: true;
    propertyType?: true;
    issueDate?: true;
    expirationDate?: true;
};
export type LandFileCountAggregateInputType = {
    id?: true;
    producerdni?: true;
    fileNumber?: true;
    area?: true;
    propertyType?: true;
    issueDate?: true;
    expirationDate?: true;
    _all?: true;
};
export type LandFileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LandFileWhereInput;
    orderBy?: Prisma.LandFileOrderByWithRelationInput | Prisma.LandFileOrderByWithRelationInput[];
    cursor?: Prisma.LandFileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LandFileCountAggregateInputType;
    _avg?: LandFileAvgAggregateInputType;
    _sum?: LandFileSumAggregateInputType;
    _min?: LandFileMinAggregateInputType;
    _max?: LandFileMaxAggregateInputType;
};
export type GetLandFileAggregateType<T extends LandFileAggregateArgs> = {
    [P in keyof T & keyof AggregateLandFile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLandFile[P]> : Prisma.GetScalarType<T[P], AggregateLandFile[P]>;
};
export type LandFileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LandFileWhereInput;
    orderBy?: Prisma.LandFileOrderByWithAggregationInput | Prisma.LandFileOrderByWithAggregationInput[];
    by: Prisma.LandFileScalarFieldEnum[] | Prisma.LandFileScalarFieldEnum;
    having?: Prisma.LandFileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LandFileCountAggregateInputType | true;
    _avg?: LandFileAvgAggregateInputType;
    _sum?: LandFileSumAggregateInputType;
    _min?: LandFileMinAggregateInputType;
    _max?: LandFileMaxAggregateInputType;
};
export type LandFileGroupByOutputType = {
    id: number;
    producerdni: string;
    fileNumber: string;
    area: number;
    propertyType: string;
    issueDate: string;
    expirationDate: string;
    _count: LandFileCountAggregateOutputType | null;
    _avg: LandFileAvgAggregateOutputType | null;
    _sum: LandFileSumAggregateOutputType | null;
    _min: LandFileMinAggregateOutputType | null;
    _max: LandFileMaxAggregateOutputType | null;
};
type GetLandFileGroupByPayload<T extends LandFileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LandFileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LandFileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LandFileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LandFileGroupByOutputType[P]>;
}>>;
export type LandFileWhereInput = {
    AND?: Prisma.LandFileWhereInput | Prisma.LandFileWhereInput[];
    OR?: Prisma.LandFileWhereInput[];
    NOT?: Prisma.LandFileWhereInput | Prisma.LandFileWhereInput[];
    id?: Prisma.IntFilter<"LandFile"> | number;
    producerdni?: Prisma.StringFilter<"LandFile"> | string;
    fileNumber?: Prisma.StringFilter<"LandFile"> | string;
    area?: Prisma.FloatFilter<"LandFile"> | number;
    propertyType?: Prisma.StringFilter<"LandFile"> | string;
    issueDate?: Prisma.StringFilter<"LandFile"> | string;
    expirationDate?: Prisma.StringFilter<"LandFile"> | string;
    producer?: Prisma.XOR<Prisma.ProducerNullableScalarRelationFilter, Prisma.ProducerWhereInput> | null;
};
export type LandFileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    producerdni?: Prisma.SortOrder;
    fileNumber?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    propertyType?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
    producer?: Prisma.ProducerOrderByWithRelationInput;
};
export type LandFileWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    fileNumber?: string;
    AND?: Prisma.LandFileWhereInput | Prisma.LandFileWhereInput[];
    OR?: Prisma.LandFileWhereInput[];
    NOT?: Prisma.LandFileWhereInput | Prisma.LandFileWhereInput[];
    producerdni?: Prisma.StringFilter<"LandFile"> | string;
    area?: Prisma.FloatFilter<"LandFile"> | number;
    propertyType?: Prisma.StringFilter<"LandFile"> | string;
    issueDate?: Prisma.StringFilter<"LandFile"> | string;
    expirationDate?: Prisma.StringFilter<"LandFile"> | string;
    producer?: Prisma.XOR<Prisma.ProducerNullableScalarRelationFilter, Prisma.ProducerWhereInput> | null;
}, "id" | "fileNumber">;
export type LandFileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    producerdni?: Prisma.SortOrder;
    fileNumber?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    propertyType?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
    _count?: Prisma.LandFileCountOrderByAggregateInput;
    _avg?: Prisma.LandFileAvgOrderByAggregateInput;
    _max?: Prisma.LandFileMaxOrderByAggregateInput;
    _min?: Prisma.LandFileMinOrderByAggregateInput;
    _sum?: Prisma.LandFileSumOrderByAggregateInput;
};
export type LandFileScalarWhereWithAggregatesInput = {
    AND?: Prisma.LandFileScalarWhereWithAggregatesInput | Prisma.LandFileScalarWhereWithAggregatesInput[];
    OR?: Prisma.LandFileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LandFileScalarWhereWithAggregatesInput | Prisma.LandFileScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"LandFile"> | number;
    producerdni?: Prisma.StringWithAggregatesFilter<"LandFile"> | string;
    fileNumber?: Prisma.StringWithAggregatesFilter<"LandFile"> | string;
    area?: Prisma.FloatWithAggregatesFilter<"LandFile"> | number;
    propertyType?: Prisma.StringWithAggregatesFilter<"LandFile"> | string;
    issueDate?: Prisma.StringWithAggregatesFilter<"LandFile"> | string;
    expirationDate?: Prisma.StringWithAggregatesFilter<"LandFile"> | string;
};
export type LandFileCreateInput = {
    fileNumber: string;
    area: number;
    propertyType: string;
    issueDate: string;
    expirationDate: string;
    producer?: Prisma.ProducerCreateNestedOneWithoutLandFilesInput;
};
export type LandFileUncheckedCreateInput = {
    id?: number;
    producerdni: string;
    fileNumber: string;
    area: number;
    propertyType: string;
    issueDate: string;
    expirationDate: string;
};
export type LandFileUpdateInput = {
    fileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.FloatFieldUpdateOperationsInput | number;
    propertyType?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.StringFieldUpdateOperationsInput | string;
    producer?: Prisma.ProducerUpdateOneWithoutLandFilesNestedInput;
};
export type LandFileUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    producerdni?: Prisma.StringFieldUpdateOperationsInput | string;
    fileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.FloatFieldUpdateOperationsInput | number;
    propertyType?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LandFileCreateManyInput = {
    id?: number;
    producerdni: string;
    fileNumber: string;
    area: number;
    propertyType: string;
    issueDate: string;
    expirationDate: string;
};
export type LandFileUpdateManyMutationInput = {
    fileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.FloatFieldUpdateOperationsInput | number;
    propertyType?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LandFileUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    producerdni?: Prisma.StringFieldUpdateOperationsInput | string;
    fileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.FloatFieldUpdateOperationsInput | number;
    propertyType?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LandFileListRelationFilter = {
    every?: Prisma.LandFileWhereInput;
    some?: Prisma.LandFileWhereInput;
    none?: Prisma.LandFileWhereInput;
};
export type LandFileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LandFileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    producerdni?: Prisma.SortOrder;
    fileNumber?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    propertyType?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
};
export type LandFileAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
};
export type LandFileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    producerdni?: Prisma.SortOrder;
    fileNumber?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    propertyType?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
};
export type LandFileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    producerdni?: Prisma.SortOrder;
    fileNumber?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    propertyType?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
};
export type LandFileSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
};
export type LandFileCreateNestedManyWithoutProducerInput = {
    create?: Prisma.XOR<Prisma.LandFileCreateWithoutProducerInput, Prisma.LandFileUncheckedCreateWithoutProducerInput> | Prisma.LandFileCreateWithoutProducerInput[] | Prisma.LandFileUncheckedCreateWithoutProducerInput[];
    connectOrCreate?: Prisma.LandFileCreateOrConnectWithoutProducerInput | Prisma.LandFileCreateOrConnectWithoutProducerInput[];
    createMany?: Prisma.LandFileCreateManyProducerInputEnvelope;
    connect?: Prisma.LandFileWhereUniqueInput | Prisma.LandFileWhereUniqueInput[];
};
export type LandFileUncheckedCreateNestedManyWithoutProducerInput = {
    create?: Prisma.XOR<Prisma.LandFileCreateWithoutProducerInput, Prisma.LandFileUncheckedCreateWithoutProducerInput> | Prisma.LandFileCreateWithoutProducerInput[] | Prisma.LandFileUncheckedCreateWithoutProducerInput[];
    connectOrCreate?: Prisma.LandFileCreateOrConnectWithoutProducerInput | Prisma.LandFileCreateOrConnectWithoutProducerInput[];
    createMany?: Prisma.LandFileCreateManyProducerInputEnvelope;
    connect?: Prisma.LandFileWhereUniqueInput | Prisma.LandFileWhereUniqueInput[];
};
export type LandFileUpdateManyWithoutProducerNestedInput = {
    create?: Prisma.XOR<Prisma.LandFileCreateWithoutProducerInput, Prisma.LandFileUncheckedCreateWithoutProducerInput> | Prisma.LandFileCreateWithoutProducerInput[] | Prisma.LandFileUncheckedCreateWithoutProducerInput[];
    connectOrCreate?: Prisma.LandFileCreateOrConnectWithoutProducerInput | Prisma.LandFileCreateOrConnectWithoutProducerInput[];
    upsert?: Prisma.LandFileUpsertWithWhereUniqueWithoutProducerInput | Prisma.LandFileUpsertWithWhereUniqueWithoutProducerInput[];
    createMany?: Prisma.LandFileCreateManyProducerInputEnvelope;
    set?: Prisma.LandFileWhereUniqueInput | Prisma.LandFileWhereUniqueInput[];
    disconnect?: Prisma.LandFileWhereUniqueInput | Prisma.LandFileWhereUniqueInput[];
    delete?: Prisma.LandFileWhereUniqueInput | Prisma.LandFileWhereUniqueInput[];
    connect?: Prisma.LandFileWhereUniqueInput | Prisma.LandFileWhereUniqueInput[];
    update?: Prisma.LandFileUpdateWithWhereUniqueWithoutProducerInput | Prisma.LandFileUpdateWithWhereUniqueWithoutProducerInput[];
    updateMany?: Prisma.LandFileUpdateManyWithWhereWithoutProducerInput | Prisma.LandFileUpdateManyWithWhereWithoutProducerInput[];
    deleteMany?: Prisma.LandFileScalarWhereInput | Prisma.LandFileScalarWhereInput[];
};
export type LandFileUncheckedUpdateManyWithoutProducerNestedInput = {
    create?: Prisma.XOR<Prisma.LandFileCreateWithoutProducerInput, Prisma.LandFileUncheckedCreateWithoutProducerInput> | Prisma.LandFileCreateWithoutProducerInput[] | Prisma.LandFileUncheckedCreateWithoutProducerInput[];
    connectOrCreate?: Prisma.LandFileCreateOrConnectWithoutProducerInput | Prisma.LandFileCreateOrConnectWithoutProducerInput[];
    upsert?: Prisma.LandFileUpsertWithWhereUniqueWithoutProducerInput | Prisma.LandFileUpsertWithWhereUniqueWithoutProducerInput[];
    createMany?: Prisma.LandFileCreateManyProducerInputEnvelope;
    set?: Prisma.LandFileWhereUniqueInput | Prisma.LandFileWhereUniqueInput[];
    disconnect?: Prisma.LandFileWhereUniqueInput | Prisma.LandFileWhereUniqueInput[];
    delete?: Prisma.LandFileWhereUniqueInput | Prisma.LandFileWhereUniqueInput[];
    connect?: Prisma.LandFileWhereUniqueInput | Prisma.LandFileWhereUniqueInput[];
    update?: Prisma.LandFileUpdateWithWhereUniqueWithoutProducerInput | Prisma.LandFileUpdateWithWhereUniqueWithoutProducerInput[];
    updateMany?: Prisma.LandFileUpdateManyWithWhereWithoutProducerInput | Prisma.LandFileUpdateManyWithWhereWithoutProducerInput[];
    deleteMany?: Prisma.LandFileScalarWhereInput | Prisma.LandFileScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type LandFileCreateWithoutProducerInput = {
    fileNumber: string;
    area: number;
    propertyType: string;
    issueDate: string;
    expirationDate: string;
};
export type LandFileUncheckedCreateWithoutProducerInput = {
    id?: number;
    fileNumber: string;
    area: number;
    propertyType: string;
    issueDate: string;
    expirationDate: string;
};
export type LandFileCreateOrConnectWithoutProducerInput = {
    where: Prisma.LandFileWhereUniqueInput;
    create: Prisma.XOR<Prisma.LandFileCreateWithoutProducerInput, Prisma.LandFileUncheckedCreateWithoutProducerInput>;
};
export type LandFileCreateManyProducerInputEnvelope = {
    data: Prisma.LandFileCreateManyProducerInput | Prisma.LandFileCreateManyProducerInput[];
    skipDuplicates?: boolean;
};
export type LandFileUpsertWithWhereUniqueWithoutProducerInput = {
    where: Prisma.LandFileWhereUniqueInput;
    update: Prisma.XOR<Prisma.LandFileUpdateWithoutProducerInput, Prisma.LandFileUncheckedUpdateWithoutProducerInput>;
    create: Prisma.XOR<Prisma.LandFileCreateWithoutProducerInput, Prisma.LandFileUncheckedCreateWithoutProducerInput>;
};
export type LandFileUpdateWithWhereUniqueWithoutProducerInput = {
    where: Prisma.LandFileWhereUniqueInput;
    data: Prisma.XOR<Prisma.LandFileUpdateWithoutProducerInput, Prisma.LandFileUncheckedUpdateWithoutProducerInput>;
};
export type LandFileUpdateManyWithWhereWithoutProducerInput = {
    where: Prisma.LandFileScalarWhereInput;
    data: Prisma.XOR<Prisma.LandFileUpdateManyMutationInput, Prisma.LandFileUncheckedUpdateManyWithoutProducerInput>;
};
export type LandFileScalarWhereInput = {
    AND?: Prisma.LandFileScalarWhereInput | Prisma.LandFileScalarWhereInput[];
    OR?: Prisma.LandFileScalarWhereInput[];
    NOT?: Prisma.LandFileScalarWhereInput | Prisma.LandFileScalarWhereInput[];
    id?: Prisma.IntFilter<"LandFile"> | number;
    producerdni?: Prisma.StringFilter<"LandFile"> | string;
    fileNumber?: Prisma.StringFilter<"LandFile"> | string;
    area?: Prisma.FloatFilter<"LandFile"> | number;
    propertyType?: Prisma.StringFilter<"LandFile"> | string;
    issueDate?: Prisma.StringFilter<"LandFile"> | string;
    expirationDate?: Prisma.StringFilter<"LandFile"> | string;
};
export type LandFileCreateManyProducerInput = {
    id?: number;
    fileNumber: string;
    area: number;
    propertyType: string;
    issueDate: string;
    expirationDate: string;
};
export type LandFileUpdateWithoutProducerInput = {
    fileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.FloatFieldUpdateOperationsInput | number;
    propertyType?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LandFileUncheckedUpdateWithoutProducerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.FloatFieldUpdateOperationsInput | number;
    propertyType?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LandFileUncheckedUpdateManyWithoutProducerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.FloatFieldUpdateOperationsInput | number;
    propertyType?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.StringFieldUpdateOperationsInput | string;
    expirationDate?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LandFileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    producerdni?: boolean;
    fileNumber?: boolean;
    area?: boolean;
    propertyType?: boolean;
    issueDate?: boolean;
    expirationDate?: boolean;
    producer?: boolean | Prisma.LandFile$producerArgs<ExtArgs>;
}, ExtArgs["result"]["landFile"]>;
export type LandFileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    producerdni?: boolean;
    fileNumber?: boolean;
    area?: boolean;
    propertyType?: boolean;
    issueDate?: boolean;
    expirationDate?: boolean;
    producer?: boolean | Prisma.LandFile$producerArgs<ExtArgs>;
}, ExtArgs["result"]["landFile"]>;
export type LandFileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    producerdni?: boolean;
    fileNumber?: boolean;
    area?: boolean;
    propertyType?: boolean;
    issueDate?: boolean;
    expirationDate?: boolean;
    producer?: boolean | Prisma.LandFile$producerArgs<ExtArgs>;
}, ExtArgs["result"]["landFile"]>;
export type LandFileSelectScalar = {
    id?: boolean;
    producerdni?: boolean;
    fileNumber?: boolean;
    area?: boolean;
    propertyType?: boolean;
    issueDate?: boolean;
    expirationDate?: boolean;
};
export type LandFileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "producerdni" | "fileNumber" | "area" | "propertyType" | "issueDate" | "expirationDate", ExtArgs["result"]["landFile"]>;
export type LandFileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producer?: boolean | Prisma.LandFile$producerArgs<ExtArgs>;
};
export type LandFileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producer?: boolean | Prisma.LandFile$producerArgs<ExtArgs>;
};
export type LandFileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producer?: boolean | Prisma.LandFile$producerArgs<ExtArgs>;
};
export type $LandFilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LandFile";
    objects: {
        producer: Prisma.$ProducerPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        producerdni: string;
        fileNumber: string;
        area: number;
        propertyType: string;
        issueDate: string;
        expirationDate: string;
    }, ExtArgs["result"]["landFile"]>;
    composites: {};
};
export type LandFileGetPayload<S extends boolean | null | undefined | LandFileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LandFilePayload, S>;
export type LandFileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LandFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LandFileCountAggregateInputType | true;
};
export interface LandFileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LandFile'];
        meta: {
            name: 'LandFile';
        };
    };
    findUnique<T extends LandFileFindUniqueArgs>(args: Prisma.SelectSubset<T, LandFileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LandFileClient<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LandFileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LandFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LandFileClient<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LandFileFindFirstArgs>(args?: Prisma.SelectSubset<T, LandFileFindFirstArgs<ExtArgs>>): Prisma.Prisma__LandFileClient<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LandFileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LandFileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LandFileClient<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LandFileFindManyArgs>(args?: Prisma.SelectSubset<T, LandFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LandFileCreateArgs>(args: Prisma.SelectSubset<T, LandFileCreateArgs<ExtArgs>>): Prisma.Prisma__LandFileClient<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LandFileCreateManyArgs>(args?: Prisma.SelectSubset<T, LandFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LandFileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LandFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LandFileDeleteArgs>(args: Prisma.SelectSubset<T, LandFileDeleteArgs<ExtArgs>>): Prisma.Prisma__LandFileClient<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LandFileUpdateArgs>(args: Prisma.SelectSubset<T, LandFileUpdateArgs<ExtArgs>>): Prisma.Prisma__LandFileClient<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LandFileDeleteManyArgs>(args?: Prisma.SelectSubset<T, LandFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LandFileUpdateManyArgs>(args: Prisma.SelectSubset<T, LandFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LandFileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LandFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LandFileUpsertArgs>(args: Prisma.SelectSubset<T, LandFileUpsertArgs<ExtArgs>>): Prisma.Prisma__LandFileClient<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LandFileCountArgs>(args?: Prisma.Subset<T, LandFileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LandFileCountAggregateOutputType> : number>;
    aggregate<T extends LandFileAggregateArgs>(args: Prisma.Subset<T, LandFileAggregateArgs>): Prisma.PrismaPromise<GetLandFileAggregateType<T>>;
    groupBy<T extends LandFileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LandFileGroupByArgs['orderBy'];
    } : {
        orderBy?: LandFileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LandFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LandFileFieldRefs;
}
export interface Prisma__LandFileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    producer<T extends Prisma.LandFile$producerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LandFile$producerArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LandFileFieldRefs {
    readonly id: Prisma.FieldRef<"LandFile", 'Int'>;
    readonly producerdni: Prisma.FieldRef<"LandFile", 'String'>;
    readonly fileNumber: Prisma.FieldRef<"LandFile", 'String'>;
    readonly area: Prisma.FieldRef<"LandFile", 'Float'>;
    readonly propertyType: Prisma.FieldRef<"LandFile", 'String'>;
    readonly issueDate: Prisma.FieldRef<"LandFile", 'String'>;
    readonly expirationDate: Prisma.FieldRef<"LandFile", 'String'>;
}
export type LandFileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelect<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    include?: Prisma.LandFileInclude<ExtArgs> | null;
    where: Prisma.LandFileWhereUniqueInput;
};
export type LandFileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelect<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    include?: Prisma.LandFileInclude<ExtArgs> | null;
    where: Prisma.LandFileWhereUniqueInput;
};
export type LandFileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelect<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    include?: Prisma.LandFileInclude<ExtArgs> | null;
    where?: Prisma.LandFileWhereInput;
    orderBy?: Prisma.LandFileOrderByWithRelationInput | Prisma.LandFileOrderByWithRelationInput[];
    cursor?: Prisma.LandFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LandFileScalarFieldEnum | Prisma.LandFileScalarFieldEnum[];
};
export type LandFileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelect<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    include?: Prisma.LandFileInclude<ExtArgs> | null;
    where?: Prisma.LandFileWhereInput;
    orderBy?: Prisma.LandFileOrderByWithRelationInput | Prisma.LandFileOrderByWithRelationInput[];
    cursor?: Prisma.LandFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LandFileScalarFieldEnum | Prisma.LandFileScalarFieldEnum[];
};
export type LandFileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelect<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    include?: Prisma.LandFileInclude<ExtArgs> | null;
    where?: Prisma.LandFileWhereInput;
    orderBy?: Prisma.LandFileOrderByWithRelationInput | Prisma.LandFileOrderByWithRelationInput[];
    cursor?: Prisma.LandFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LandFileScalarFieldEnum | Prisma.LandFileScalarFieldEnum[];
};
export type LandFileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelect<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    include?: Prisma.LandFileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LandFileCreateInput, Prisma.LandFileUncheckedCreateInput>;
};
export type LandFileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LandFileCreateManyInput | Prisma.LandFileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LandFileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    data: Prisma.LandFileCreateManyInput | Prisma.LandFileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LandFileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LandFileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelect<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    include?: Prisma.LandFileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LandFileUpdateInput, Prisma.LandFileUncheckedUpdateInput>;
    where: Prisma.LandFileWhereUniqueInput;
};
export type LandFileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LandFileUpdateManyMutationInput, Prisma.LandFileUncheckedUpdateManyInput>;
    where?: Prisma.LandFileWhereInput;
    limit?: number;
};
export type LandFileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LandFileUpdateManyMutationInput, Prisma.LandFileUncheckedUpdateManyInput>;
    where?: Prisma.LandFileWhereInput;
    limit?: number;
    include?: Prisma.LandFileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LandFileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelect<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    include?: Prisma.LandFileInclude<ExtArgs> | null;
    where: Prisma.LandFileWhereUniqueInput;
    create: Prisma.XOR<Prisma.LandFileCreateInput, Prisma.LandFileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LandFileUpdateInput, Prisma.LandFileUncheckedUpdateInput>;
};
export type LandFileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelect<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    include?: Prisma.LandFileInclude<ExtArgs> | null;
    where: Prisma.LandFileWhereUniqueInput;
};
export type LandFileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LandFileWhereInput;
    limit?: number;
};
export type LandFile$producerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where?: Prisma.ProducerWhereInput;
};
export type LandFileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LandFileSelect<ExtArgs> | null;
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    include?: Prisma.LandFileInclude<ExtArgs> | null;
};
export {};
