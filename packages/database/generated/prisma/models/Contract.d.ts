import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type ContractModel = runtime.Types.Result.DefaultSelection<Prisma.$ContractPayload>;
export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null;
    _avg: ContractAvgAggregateOutputType | null;
    _sum: ContractSumAggregateOutputType | null;
    _min: ContractMinAggregateOutputType | null;
    _max: ContractMaxAggregateOutputType | null;
};
export type ContractAvgAggregateOutputType = {
    id: number | null;
    producerId: number | null;
    plantingArea: number | null;
    seedlingQuantity: number | null;
};
export type ContractSumAggregateOutputType = {
    id: number | null;
    producerId: number | null;
    plantingArea: number | null;
    seedlingQuantity: number | null;
};
export type ContractMinAggregateOutputType = {
    id: number | null;
    number: string | null;
    creationDate: string | null;
    producerId: number | null;
    plantingArea: number | null;
    seedlingQuantity: number | null;
    plantingType: string | null;
    tobaccoType: string | null;
};
export type ContractMaxAggregateOutputType = {
    id: number | null;
    number: string | null;
    creationDate: string | null;
    producerId: number | null;
    plantingArea: number | null;
    seedlingQuantity: number | null;
    plantingType: string | null;
    tobaccoType: string | null;
};
export type ContractCountAggregateOutputType = {
    id: number;
    number: number;
    creationDate: number;
    producerId: number;
    plantingArea: number;
    seedlingQuantity: number;
    plantingType: number;
    tobaccoType: number;
    _all: number;
};
export type ContractAvgAggregateInputType = {
    id?: true;
    producerId?: true;
    plantingArea?: true;
    seedlingQuantity?: true;
};
export type ContractSumAggregateInputType = {
    id?: true;
    producerId?: true;
    plantingArea?: true;
    seedlingQuantity?: true;
};
export type ContractMinAggregateInputType = {
    id?: true;
    number?: true;
    creationDate?: true;
    producerId?: true;
    plantingArea?: true;
    seedlingQuantity?: true;
    plantingType?: true;
    tobaccoType?: true;
};
export type ContractMaxAggregateInputType = {
    id?: true;
    number?: true;
    creationDate?: true;
    producerId?: true;
    plantingArea?: true;
    seedlingQuantity?: true;
    plantingType?: true;
    tobaccoType?: true;
};
export type ContractCountAggregateInputType = {
    id?: true;
    number?: true;
    creationDate?: true;
    producerId?: true;
    plantingArea?: true;
    seedlingQuantity?: true;
    plantingType?: true;
    tobaccoType?: true;
    _all?: true;
};
export type ContractAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithRelationInput | Prisma.ContractOrderByWithRelationInput[];
    cursor?: Prisma.ContractWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContractCountAggregateInputType;
    _avg?: ContractAvgAggregateInputType;
    _sum?: ContractSumAggregateInputType;
    _min?: ContractMinAggregateInputType;
    _max?: ContractMaxAggregateInputType;
};
export type GetContractAggregateType<T extends ContractAggregateArgs> = {
    [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContract[P]> : Prisma.GetScalarType<T[P], AggregateContract[P]>;
};
export type ContractGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithAggregationInput | Prisma.ContractOrderByWithAggregationInput[];
    by: Prisma.ContractScalarFieldEnum[] | Prisma.ContractScalarFieldEnum;
    having?: Prisma.ContractScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContractCountAggregateInputType | true;
    _avg?: ContractAvgAggregateInputType;
    _sum?: ContractSumAggregateInputType;
    _min?: ContractMinAggregateInputType;
    _max?: ContractMaxAggregateInputType;
};
export type ContractGroupByOutputType = {
    id: number;
    number: string;
    creationDate: string;
    producerId: number;
    plantingArea: number;
    seedlingQuantity: number;
    plantingType: string;
    tobaccoType: string;
    _count: ContractCountAggregateOutputType | null;
    _avg: ContractAvgAggregateOutputType | null;
    _sum: ContractSumAggregateOutputType | null;
    _min: ContractMinAggregateOutputType | null;
    _max: ContractMaxAggregateOutputType | null;
};
type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContractGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContractGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContractGroupByOutputType[P]>;
}>>;
export type ContractWhereInput = {
    AND?: Prisma.ContractWhereInput | Prisma.ContractWhereInput[];
    OR?: Prisma.ContractWhereInput[];
    NOT?: Prisma.ContractWhereInput | Prisma.ContractWhereInput[];
    id?: Prisma.IntFilter<"Contract"> | number;
    number?: Prisma.StringFilter<"Contract"> | string;
    creationDate?: Prisma.StringFilter<"Contract"> | string;
    producerId?: Prisma.IntFilter<"Contract"> | number;
    plantingArea?: Prisma.FloatFilter<"Contract"> | number;
    seedlingQuantity?: Prisma.FloatFilter<"Contract"> | number;
    plantingType?: Prisma.StringFilter<"Contract"> | string;
    tobaccoType?: Prisma.StringFilter<"Contract"> | string;
    producer?: Prisma.XOR<Prisma.ProducerScalarRelationFilter, Prisma.ProducerWhereInput>;
    supplies?: Prisma.SupplyContractListRelationFilter;
};
export type ContractOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    producerId?: Prisma.SortOrder;
    plantingArea?: Prisma.SortOrder;
    seedlingQuantity?: Prisma.SortOrder;
    plantingType?: Prisma.SortOrder;
    tobaccoType?: Prisma.SortOrder;
    producer?: Prisma.ProducerOrderByWithRelationInput;
    supplies?: Prisma.SupplyContractOrderByRelationAggregateInput;
};
export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    number?: string;
    AND?: Prisma.ContractWhereInput | Prisma.ContractWhereInput[];
    OR?: Prisma.ContractWhereInput[];
    NOT?: Prisma.ContractWhereInput | Prisma.ContractWhereInput[];
    creationDate?: Prisma.StringFilter<"Contract"> | string;
    producerId?: Prisma.IntFilter<"Contract"> | number;
    plantingArea?: Prisma.FloatFilter<"Contract"> | number;
    seedlingQuantity?: Prisma.FloatFilter<"Contract"> | number;
    plantingType?: Prisma.StringFilter<"Contract"> | string;
    tobaccoType?: Prisma.StringFilter<"Contract"> | string;
    producer?: Prisma.XOR<Prisma.ProducerScalarRelationFilter, Prisma.ProducerWhereInput>;
    supplies?: Prisma.SupplyContractListRelationFilter;
}, "id" | "number">;
export type ContractOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    producerId?: Prisma.SortOrder;
    plantingArea?: Prisma.SortOrder;
    seedlingQuantity?: Prisma.SortOrder;
    plantingType?: Prisma.SortOrder;
    tobaccoType?: Prisma.SortOrder;
    _count?: Prisma.ContractCountOrderByAggregateInput;
    _avg?: Prisma.ContractAvgOrderByAggregateInput;
    _max?: Prisma.ContractMaxOrderByAggregateInput;
    _min?: Prisma.ContractMinOrderByAggregateInput;
    _sum?: Prisma.ContractSumOrderByAggregateInput;
};
export type ContractScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContractScalarWhereWithAggregatesInput | Prisma.ContractScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContractScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContractScalarWhereWithAggregatesInput | Prisma.ContractScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Contract"> | number;
    number?: Prisma.StringWithAggregatesFilter<"Contract"> | string;
    creationDate?: Prisma.StringWithAggregatesFilter<"Contract"> | string;
    producerId?: Prisma.IntWithAggregatesFilter<"Contract"> | number;
    plantingArea?: Prisma.FloatWithAggregatesFilter<"Contract"> | number;
    seedlingQuantity?: Prisma.FloatWithAggregatesFilter<"Contract"> | number;
    plantingType?: Prisma.StringWithAggregatesFilter<"Contract"> | string;
    tobaccoType?: Prisma.StringWithAggregatesFilter<"Contract"> | string;
};
export type ContractCreateInput = {
    number: string;
    creationDate: string;
    plantingArea: number;
    seedlingQuantity: number;
    plantingType: string;
    tobaccoType: string;
    producer: Prisma.ProducerCreateNestedOneWithoutContractInput;
    supplies?: Prisma.SupplyContractCreateNestedManyWithoutContractInput;
};
export type ContractUncheckedCreateInput = {
    id?: number;
    number: string;
    creationDate: string;
    producerId: number;
    plantingArea: number;
    seedlingQuantity: number;
    plantingType: string;
    tobaccoType: string;
    supplies?: Prisma.SupplyContractUncheckedCreateNestedManyWithoutContractInput;
};
export type ContractUpdateInput = {
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.StringFieldUpdateOperationsInput | string;
    plantingArea?: Prisma.FloatFieldUpdateOperationsInput | number;
    seedlingQuantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    plantingType?: Prisma.StringFieldUpdateOperationsInput | string;
    tobaccoType?: Prisma.StringFieldUpdateOperationsInput | string;
    producer?: Prisma.ProducerUpdateOneRequiredWithoutContractNestedInput;
    supplies?: Prisma.SupplyContractUpdateManyWithoutContractNestedInput;
};
export type ContractUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.StringFieldUpdateOperationsInput | string;
    producerId?: Prisma.IntFieldUpdateOperationsInput | number;
    plantingArea?: Prisma.FloatFieldUpdateOperationsInput | number;
    seedlingQuantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    plantingType?: Prisma.StringFieldUpdateOperationsInput | string;
    tobaccoType?: Prisma.StringFieldUpdateOperationsInput | string;
    supplies?: Prisma.SupplyContractUncheckedUpdateManyWithoutContractNestedInput;
};
export type ContractCreateManyInput = {
    id?: number;
    number: string;
    creationDate: string;
    producerId: number;
    plantingArea: number;
    seedlingQuantity: number;
    plantingType: string;
    tobaccoType: string;
};
export type ContractUpdateManyMutationInput = {
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.StringFieldUpdateOperationsInput | string;
    plantingArea?: Prisma.FloatFieldUpdateOperationsInput | number;
    seedlingQuantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    plantingType?: Prisma.StringFieldUpdateOperationsInput | string;
    tobaccoType?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContractUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.StringFieldUpdateOperationsInput | string;
    producerId?: Prisma.IntFieldUpdateOperationsInput | number;
    plantingArea?: Prisma.FloatFieldUpdateOperationsInput | number;
    seedlingQuantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    plantingType?: Prisma.StringFieldUpdateOperationsInput | string;
    tobaccoType?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContractListRelationFilter = {
    every?: Prisma.ContractWhereInput;
    some?: Prisma.ContractWhereInput;
    none?: Prisma.ContractWhereInput;
};
export type ContractOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContractCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    producerId?: Prisma.SortOrder;
    plantingArea?: Prisma.SortOrder;
    seedlingQuantity?: Prisma.SortOrder;
    plantingType?: Prisma.SortOrder;
    tobaccoType?: Prisma.SortOrder;
};
export type ContractAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    producerId?: Prisma.SortOrder;
    plantingArea?: Prisma.SortOrder;
    seedlingQuantity?: Prisma.SortOrder;
};
export type ContractMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    producerId?: Prisma.SortOrder;
    plantingArea?: Prisma.SortOrder;
    seedlingQuantity?: Prisma.SortOrder;
    plantingType?: Prisma.SortOrder;
    tobaccoType?: Prisma.SortOrder;
};
export type ContractMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    producerId?: Prisma.SortOrder;
    plantingArea?: Prisma.SortOrder;
    seedlingQuantity?: Prisma.SortOrder;
    plantingType?: Prisma.SortOrder;
    tobaccoType?: Prisma.SortOrder;
};
export type ContractSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    producerId?: Prisma.SortOrder;
    plantingArea?: Prisma.SortOrder;
    seedlingQuantity?: Prisma.SortOrder;
};
export type ContractScalarRelationFilter = {
    is?: Prisma.ContractWhereInput;
    isNot?: Prisma.ContractWhereInput;
};
export type ContractCreateNestedManyWithoutProducerInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutProducerInput, Prisma.ContractUncheckedCreateWithoutProducerInput> | Prisma.ContractCreateWithoutProducerInput[] | Prisma.ContractUncheckedCreateWithoutProducerInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutProducerInput | Prisma.ContractCreateOrConnectWithoutProducerInput[];
    createMany?: Prisma.ContractCreateManyProducerInputEnvelope;
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
};
export type ContractUncheckedCreateNestedManyWithoutProducerInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutProducerInput, Prisma.ContractUncheckedCreateWithoutProducerInput> | Prisma.ContractCreateWithoutProducerInput[] | Prisma.ContractUncheckedCreateWithoutProducerInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutProducerInput | Prisma.ContractCreateOrConnectWithoutProducerInput[];
    createMany?: Prisma.ContractCreateManyProducerInputEnvelope;
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
};
export type ContractUpdateManyWithoutProducerNestedInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutProducerInput, Prisma.ContractUncheckedCreateWithoutProducerInput> | Prisma.ContractCreateWithoutProducerInput[] | Prisma.ContractUncheckedCreateWithoutProducerInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutProducerInput | Prisma.ContractCreateOrConnectWithoutProducerInput[];
    upsert?: Prisma.ContractUpsertWithWhereUniqueWithoutProducerInput | Prisma.ContractUpsertWithWhereUniqueWithoutProducerInput[];
    createMany?: Prisma.ContractCreateManyProducerInputEnvelope;
    set?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    disconnect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    delete?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    update?: Prisma.ContractUpdateWithWhereUniqueWithoutProducerInput | Prisma.ContractUpdateWithWhereUniqueWithoutProducerInput[];
    updateMany?: Prisma.ContractUpdateManyWithWhereWithoutProducerInput | Prisma.ContractUpdateManyWithWhereWithoutProducerInput[];
    deleteMany?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
};
export type ContractUncheckedUpdateManyWithoutProducerNestedInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutProducerInput, Prisma.ContractUncheckedCreateWithoutProducerInput> | Prisma.ContractCreateWithoutProducerInput[] | Prisma.ContractUncheckedCreateWithoutProducerInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutProducerInput | Prisma.ContractCreateOrConnectWithoutProducerInput[];
    upsert?: Prisma.ContractUpsertWithWhereUniqueWithoutProducerInput | Prisma.ContractUpsertWithWhereUniqueWithoutProducerInput[];
    createMany?: Prisma.ContractCreateManyProducerInputEnvelope;
    set?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    disconnect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    delete?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    update?: Prisma.ContractUpdateWithWhereUniqueWithoutProducerInput | Prisma.ContractUpdateWithWhereUniqueWithoutProducerInput[];
    updateMany?: Prisma.ContractUpdateManyWithWhereWithoutProducerInput | Prisma.ContractUpdateManyWithWhereWithoutProducerInput[];
    deleteMany?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
};
export type ContractCreateNestedOneWithoutSuppliesInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutSuppliesInput, Prisma.ContractUncheckedCreateWithoutSuppliesInput>;
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutSuppliesInput;
    connect?: Prisma.ContractWhereUniqueInput;
};
export type ContractUpdateOneRequiredWithoutSuppliesNestedInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutSuppliesInput, Prisma.ContractUncheckedCreateWithoutSuppliesInput>;
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutSuppliesInput;
    upsert?: Prisma.ContractUpsertWithoutSuppliesInput;
    connect?: Prisma.ContractWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContractUpdateToOneWithWhereWithoutSuppliesInput, Prisma.ContractUpdateWithoutSuppliesInput>, Prisma.ContractUncheckedUpdateWithoutSuppliesInput>;
};
export type ContractCreateWithoutProducerInput = {
    number: string;
    creationDate: string;
    plantingArea: number;
    seedlingQuantity: number;
    plantingType: string;
    tobaccoType: string;
    supplies?: Prisma.SupplyContractCreateNestedManyWithoutContractInput;
};
export type ContractUncheckedCreateWithoutProducerInput = {
    id?: number;
    number: string;
    creationDate: string;
    plantingArea: number;
    seedlingQuantity: number;
    plantingType: string;
    tobaccoType: string;
    supplies?: Prisma.SupplyContractUncheckedCreateNestedManyWithoutContractInput;
};
export type ContractCreateOrConnectWithoutProducerInput = {
    where: Prisma.ContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContractCreateWithoutProducerInput, Prisma.ContractUncheckedCreateWithoutProducerInput>;
};
export type ContractCreateManyProducerInputEnvelope = {
    data: Prisma.ContractCreateManyProducerInput | Prisma.ContractCreateManyProducerInput[];
    skipDuplicates?: boolean;
};
export type ContractUpsertWithWhereUniqueWithoutProducerInput = {
    where: Prisma.ContractWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContractUpdateWithoutProducerInput, Prisma.ContractUncheckedUpdateWithoutProducerInput>;
    create: Prisma.XOR<Prisma.ContractCreateWithoutProducerInput, Prisma.ContractUncheckedCreateWithoutProducerInput>;
};
export type ContractUpdateWithWhereUniqueWithoutProducerInput = {
    where: Prisma.ContractWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContractUpdateWithoutProducerInput, Prisma.ContractUncheckedUpdateWithoutProducerInput>;
};
export type ContractUpdateManyWithWhereWithoutProducerInput = {
    where: Prisma.ContractScalarWhereInput;
    data: Prisma.XOR<Prisma.ContractUpdateManyMutationInput, Prisma.ContractUncheckedUpdateManyWithoutProducerInput>;
};
export type ContractScalarWhereInput = {
    AND?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
    OR?: Prisma.ContractScalarWhereInput[];
    NOT?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
    id?: Prisma.IntFilter<"Contract"> | number;
    number?: Prisma.StringFilter<"Contract"> | string;
    creationDate?: Prisma.StringFilter<"Contract"> | string;
    producerId?: Prisma.IntFilter<"Contract"> | number;
    plantingArea?: Prisma.FloatFilter<"Contract"> | number;
    seedlingQuantity?: Prisma.FloatFilter<"Contract"> | number;
    plantingType?: Prisma.StringFilter<"Contract"> | string;
    tobaccoType?: Prisma.StringFilter<"Contract"> | string;
};
export type ContractCreateWithoutSuppliesInput = {
    number: string;
    creationDate: string;
    plantingArea: number;
    seedlingQuantity: number;
    plantingType: string;
    tobaccoType: string;
    producer: Prisma.ProducerCreateNestedOneWithoutContractInput;
};
export type ContractUncheckedCreateWithoutSuppliesInput = {
    id?: number;
    number: string;
    creationDate: string;
    producerId: number;
    plantingArea: number;
    seedlingQuantity: number;
    plantingType: string;
    tobaccoType: string;
};
export type ContractCreateOrConnectWithoutSuppliesInput = {
    where: Prisma.ContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContractCreateWithoutSuppliesInput, Prisma.ContractUncheckedCreateWithoutSuppliesInput>;
};
export type ContractUpsertWithoutSuppliesInput = {
    update: Prisma.XOR<Prisma.ContractUpdateWithoutSuppliesInput, Prisma.ContractUncheckedUpdateWithoutSuppliesInput>;
    create: Prisma.XOR<Prisma.ContractCreateWithoutSuppliesInput, Prisma.ContractUncheckedCreateWithoutSuppliesInput>;
    where?: Prisma.ContractWhereInput;
};
export type ContractUpdateToOneWithWhereWithoutSuppliesInput = {
    where?: Prisma.ContractWhereInput;
    data: Prisma.XOR<Prisma.ContractUpdateWithoutSuppliesInput, Prisma.ContractUncheckedUpdateWithoutSuppliesInput>;
};
export type ContractUpdateWithoutSuppliesInput = {
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.StringFieldUpdateOperationsInput | string;
    plantingArea?: Prisma.FloatFieldUpdateOperationsInput | number;
    seedlingQuantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    plantingType?: Prisma.StringFieldUpdateOperationsInput | string;
    tobaccoType?: Prisma.StringFieldUpdateOperationsInput | string;
    producer?: Prisma.ProducerUpdateOneRequiredWithoutContractNestedInput;
};
export type ContractUncheckedUpdateWithoutSuppliesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.StringFieldUpdateOperationsInput | string;
    producerId?: Prisma.IntFieldUpdateOperationsInput | number;
    plantingArea?: Prisma.FloatFieldUpdateOperationsInput | number;
    seedlingQuantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    plantingType?: Prisma.StringFieldUpdateOperationsInput | string;
    tobaccoType?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContractCreateManyProducerInput = {
    id?: number;
    number: string;
    creationDate: string;
    plantingArea: number;
    seedlingQuantity: number;
    plantingType: string;
    tobaccoType: string;
};
export type ContractUpdateWithoutProducerInput = {
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.StringFieldUpdateOperationsInput | string;
    plantingArea?: Prisma.FloatFieldUpdateOperationsInput | number;
    seedlingQuantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    plantingType?: Prisma.StringFieldUpdateOperationsInput | string;
    tobaccoType?: Prisma.StringFieldUpdateOperationsInput | string;
    supplies?: Prisma.SupplyContractUpdateManyWithoutContractNestedInput;
};
export type ContractUncheckedUpdateWithoutProducerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.StringFieldUpdateOperationsInput | string;
    plantingArea?: Prisma.FloatFieldUpdateOperationsInput | number;
    seedlingQuantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    plantingType?: Prisma.StringFieldUpdateOperationsInput | string;
    tobaccoType?: Prisma.StringFieldUpdateOperationsInput | string;
    supplies?: Prisma.SupplyContractUncheckedUpdateManyWithoutContractNestedInput;
};
export type ContractUncheckedUpdateManyWithoutProducerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.StringFieldUpdateOperationsInput | string;
    plantingArea?: Prisma.FloatFieldUpdateOperationsInput | number;
    seedlingQuantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    plantingType?: Prisma.StringFieldUpdateOperationsInput | string;
    tobaccoType?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContractCountOutputType = {
    supplies: number;
};
export type ContractCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplies?: boolean | ContractCountOutputTypeCountSuppliesArgs;
};
export type ContractCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractCountOutputTypeSelect<ExtArgs> | null;
};
export type ContractCountOutputTypeCountSuppliesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplyContractWhereInput;
};
export type ContractSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    creationDate?: boolean;
    producerId?: boolean;
    plantingArea?: boolean;
    seedlingQuantity?: boolean;
    plantingType?: boolean;
    tobaccoType?: boolean;
    producer?: boolean | Prisma.ProducerDefaultArgs<ExtArgs>;
    supplies?: boolean | Prisma.Contract$suppliesArgs<ExtArgs>;
    _count?: boolean | Prisma.ContractCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contract"]>;
export type ContractSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    creationDate?: boolean;
    producerId?: boolean;
    plantingArea?: boolean;
    seedlingQuantity?: boolean;
    plantingType?: boolean;
    tobaccoType?: boolean;
    producer?: boolean | Prisma.ProducerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contract"]>;
export type ContractSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    creationDate?: boolean;
    producerId?: boolean;
    plantingArea?: boolean;
    seedlingQuantity?: boolean;
    plantingType?: boolean;
    tobaccoType?: boolean;
    producer?: boolean | Prisma.ProducerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contract"]>;
export type ContractSelectScalar = {
    id?: boolean;
    number?: boolean;
    creationDate?: boolean;
    producerId?: boolean;
    plantingArea?: boolean;
    seedlingQuantity?: boolean;
    plantingType?: boolean;
    tobaccoType?: boolean;
};
export type ContractOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "number" | "creationDate" | "producerId" | "plantingArea" | "seedlingQuantity" | "plantingType" | "tobaccoType", ExtArgs["result"]["contract"]>;
export type ContractInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producer?: boolean | Prisma.ProducerDefaultArgs<ExtArgs>;
    supplies?: boolean | Prisma.Contract$suppliesArgs<ExtArgs>;
    _count?: boolean | Prisma.ContractCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ContractIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producer?: boolean | Prisma.ProducerDefaultArgs<ExtArgs>;
};
export type ContractIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producer?: boolean | Prisma.ProducerDefaultArgs<ExtArgs>;
};
export type $ContractPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Contract";
    objects: {
        producer: Prisma.$ProducerPayload<ExtArgs>;
        supplies: Prisma.$SupplyContractPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        number: string;
        creationDate: string;
        producerId: number;
        plantingArea: number;
        seedlingQuantity: number;
        plantingType: string;
        tobaccoType: string;
    }, ExtArgs["result"]["contract"]>;
    composites: {};
};
export type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContractPayload, S>;
export type ContractCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContractCountAggregateInputType | true;
};
export interface ContractDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Contract'];
        meta: {
            name: 'Contract';
        };
    };
    findUnique<T extends ContractFindUniqueArgs>(args: Prisma.SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContractFindFirstArgs>(args?: Prisma.SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContractFindManyArgs>(args?: Prisma.SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContractCreateArgs>(args: Prisma.SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContractCreateManyArgs>(args?: Prisma.SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContractDeleteArgs>(args: Prisma.SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContractUpdateArgs>(args: Prisma.SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContractDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContractUpdateManyArgs>(args: Prisma.SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContractUpsertArgs>(args: Prisma.SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContractCountArgs>(args?: Prisma.Subset<T, ContractCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContractCountAggregateOutputType> : number>;
    aggregate<T extends ContractAggregateArgs>(args: Prisma.Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>;
    groupBy<T extends ContractGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContractGroupByArgs['orderBy'];
    } : {
        orderBy?: ContractGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContractFieldRefs;
}
export interface Prisma__ContractClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    producer<T extends Prisma.ProducerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProducerDefaultArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    supplies<T extends Prisma.Contract$suppliesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Contract$suppliesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContractFieldRefs {
    readonly id: Prisma.FieldRef<"Contract", 'Int'>;
    readonly number: Prisma.FieldRef<"Contract", 'String'>;
    readonly creationDate: Prisma.FieldRef<"Contract", 'String'>;
    readonly producerId: Prisma.FieldRef<"Contract", 'Int'>;
    readonly plantingArea: Prisma.FieldRef<"Contract", 'Float'>;
    readonly seedlingQuantity: Prisma.FieldRef<"Contract", 'Float'>;
    readonly plantingType: Prisma.FieldRef<"Contract", 'String'>;
    readonly tobaccoType: Prisma.FieldRef<"Contract", 'String'>;
}
export type ContractFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where: Prisma.ContractWhereUniqueInput;
};
export type ContractFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where: Prisma.ContractWhereUniqueInput;
};
export type ContractFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithRelationInput | Prisma.ContractOrderByWithRelationInput[];
    cursor?: Prisma.ContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractScalarFieldEnum | Prisma.ContractScalarFieldEnum[];
};
export type ContractFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithRelationInput | Prisma.ContractOrderByWithRelationInput[];
    cursor?: Prisma.ContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractScalarFieldEnum | Prisma.ContractScalarFieldEnum[];
};
export type ContractFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithRelationInput | Prisma.ContractOrderByWithRelationInput[];
    cursor?: Prisma.ContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractScalarFieldEnum | Prisma.ContractScalarFieldEnum[];
};
export type ContractCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContractCreateInput, Prisma.ContractUncheckedCreateInput>;
};
export type ContractCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContractCreateManyInput | Prisma.ContractCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContractCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    data: Prisma.ContractCreateManyInput | Prisma.ContractCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContractIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContractUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContractUpdateInput, Prisma.ContractUncheckedUpdateInput>;
    where: Prisma.ContractWhereUniqueInput;
};
export type ContractUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContractUpdateManyMutationInput, Prisma.ContractUncheckedUpdateManyInput>;
    where?: Prisma.ContractWhereInput;
    limit?: number;
};
export type ContractUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContractUpdateManyMutationInput, Prisma.ContractUncheckedUpdateManyInput>;
    where?: Prisma.ContractWhereInput;
    limit?: number;
    include?: Prisma.ContractIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContractUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where: Prisma.ContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContractCreateInput, Prisma.ContractUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContractUpdateInput, Prisma.ContractUncheckedUpdateInput>;
};
export type ContractDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where: Prisma.ContractWhereUniqueInput;
};
export type ContractDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContractWhereInput;
    limit?: number;
};
export type Contract$suppliesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContractDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
};
export {};
