import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type SupplyContractModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplyContractPayload>;
export type AggregateSupplyContract = {
    _count: SupplyContractCountAggregateOutputType | null;
    _avg: SupplyContractAvgAggregateOutputType | null;
    _sum: SupplyContractSumAggregateOutputType | null;
    _min: SupplyContractMinAggregateOutputType | null;
    _max: SupplyContractMaxAggregateOutputType | null;
};
export type SupplyContractAvgAggregateOutputType = {
    id: number | null;
    contractId: number | null;
    supplyId: number | null;
    quantdatety: number | null;
};
export type SupplyContractSumAggregateOutputType = {
    id: number | null;
    contractId: number | null;
    supplyId: number | null;
    quantdatety: number | null;
};
export type SupplyContractMinAggregateOutputType = {
    id: number | null;
    contractId: number | null;
    supplyId: number | null;
    quantdatety: number | null;
};
export type SupplyContractMaxAggregateOutputType = {
    id: number | null;
    contractId: number | null;
    supplyId: number | null;
    quantdatety: number | null;
};
export type SupplyContractCountAggregateOutputType = {
    id: number;
    contractId: number;
    supplyId: number;
    quantdatety: number;
    _all: number;
};
export type SupplyContractAvgAggregateInputType = {
    id?: true;
    contractId?: true;
    supplyId?: true;
    quantdatety?: true;
};
export type SupplyContractSumAggregateInputType = {
    id?: true;
    contractId?: true;
    supplyId?: true;
    quantdatety?: true;
};
export type SupplyContractMinAggregateInputType = {
    id?: true;
    contractId?: true;
    supplyId?: true;
    quantdatety?: true;
};
export type SupplyContractMaxAggregateInputType = {
    id?: true;
    contractId?: true;
    supplyId?: true;
    quantdatety?: true;
};
export type SupplyContractCountAggregateInputType = {
    id?: true;
    contractId?: true;
    supplyId?: true;
    quantdatety?: true;
    _all?: true;
};
export type SupplyContractAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplyContractWhereInput;
    orderBy?: Prisma.SupplyContractOrderByWithRelationInput | Prisma.SupplyContractOrderByWithRelationInput[];
    cursor?: Prisma.SupplyContractWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SupplyContractCountAggregateInputType;
    _avg?: SupplyContractAvgAggregateInputType;
    _sum?: SupplyContractSumAggregateInputType;
    _min?: SupplyContractMinAggregateInputType;
    _max?: SupplyContractMaxAggregateInputType;
};
export type GetSupplyContractAggregateType<T extends SupplyContractAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplyContract]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplyContract[P]> : Prisma.GetScalarType<T[P], AggregateSupplyContract[P]>;
};
export type SupplyContractGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplyContractWhereInput;
    orderBy?: Prisma.SupplyContractOrderByWithAggregationInput | Prisma.SupplyContractOrderByWithAggregationInput[];
    by: Prisma.SupplyContractScalarFieldEnum[] | Prisma.SupplyContractScalarFieldEnum;
    having?: Prisma.SupplyContractScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplyContractCountAggregateInputType | true;
    _avg?: SupplyContractAvgAggregateInputType;
    _sum?: SupplyContractSumAggregateInputType;
    _min?: SupplyContractMinAggregateInputType;
    _max?: SupplyContractMaxAggregateInputType;
};
export type SupplyContractGroupByOutputType = {
    id: number;
    contractId: number;
    supplyId: number;
    quantdatety: number;
    _count: SupplyContractCountAggregateOutputType | null;
    _avg: SupplyContractAvgAggregateOutputType | null;
    _sum: SupplyContractSumAggregateOutputType | null;
    _min: SupplyContractMinAggregateOutputType | null;
    _max: SupplyContractMaxAggregateOutputType | null;
};
type GetSupplyContractGroupByPayload<T extends SupplyContractGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplyContractGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplyContractGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplyContractGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplyContractGroupByOutputType[P]>;
}>>;
export type SupplyContractWhereInput = {
    AND?: Prisma.SupplyContractWhereInput | Prisma.SupplyContractWhereInput[];
    OR?: Prisma.SupplyContractWhereInput[];
    NOT?: Prisma.SupplyContractWhereInput | Prisma.SupplyContractWhereInput[];
    id?: Prisma.IntFilter<"SupplyContract"> | number;
    contractId?: Prisma.IntFilter<"SupplyContract"> | number;
    supplyId?: Prisma.IntFilter<"SupplyContract"> | number;
    quantdatety?: Prisma.FloatFilter<"SupplyContract"> | number;
    contract?: Prisma.XOR<Prisma.ContractScalarRelationFilter, Prisma.ContractWhereInput>;
    supply?: Prisma.XOR<Prisma.SupplyScalarRelationFilter, Prisma.SupplyWhereInput>;
};
export type SupplyContractOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    supplyId?: Prisma.SortOrder;
    quantdatety?: Prisma.SortOrder;
    contract?: Prisma.ContractOrderByWithRelationInput;
    supply?: Prisma.SupplyOrderByWithRelationInput;
};
export type SupplyContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SupplyContractWhereInput | Prisma.SupplyContractWhereInput[];
    OR?: Prisma.SupplyContractWhereInput[];
    NOT?: Prisma.SupplyContractWhereInput | Prisma.SupplyContractWhereInput[];
    contractId?: Prisma.IntFilter<"SupplyContract"> | number;
    supplyId?: Prisma.IntFilter<"SupplyContract"> | number;
    quantdatety?: Prisma.FloatFilter<"SupplyContract"> | number;
    contract?: Prisma.XOR<Prisma.ContractScalarRelationFilter, Prisma.ContractWhereInput>;
    supply?: Prisma.XOR<Prisma.SupplyScalarRelationFilter, Prisma.SupplyWhereInput>;
}, "id">;
export type SupplyContractOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    supplyId?: Prisma.SortOrder;
    quantdatety?: Prisma.SortOrder;
    _count?: Prisma.SupplyContractCountOrderByAggregateInput;
    _avg?: Prisma.SupplyContractAvgOrderByAggregateInput;
    _max?: Prisma.SupplyContractMaxOrderByAggregateInput;
    _min?: Prisma.SupplyContractMinOrderByAggregateInput;
    _sum?: Prisma.SupplyContractSumOrderByAggregateInput;
};
export type SupplyContractScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplyContractScalarWhereWithAggregatesInput | Prisma.SupplyContractScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplyContractScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplyContractScalarWhereWithAggregatesInput | Prisma.SupplyContractScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SupplyContract"> | number;
    contractId?: Prisma.IntWithAggregatesFilter<"SupplyContract"> | number;
    supplyId?: Prisma.IntWithAggregatesFilter<"SupplyContract"> | number;
    quantdatety?: Prisma.FloatWithAggregatesFilter<"SupplyContract"> | number;
};
export type SupplyContractCreateInput = {
    quantdatety: number;
    contract: Prisma.ContractCreateNestedOneWithoutSuppliesInput;
    supply: Prisma.SupplyCreateNestedOneWithoutSupplyContractInput;
};
export type SupplyContractUncheckedCreateInput = {
    id?: number;
    contractId: number;
    supplyId: number;
    quantdatety: number;
};
export type SupplyContractUpdateInput = {
    quantdatety?: Prisma.FloatFieldUpdateOperationsInput | number;
    contract?: Prisma.ContractUpdateOneRequiredWithoutSuppliesNestedInput;
    supply?: Prisma.SupplyUpdateOneRequiredWithoutSupplyContractNestedInput;
};
export type SupplyContractUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contractId?: Prisma.IntFieldUpdateOperationsInput | number;
    supplyId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantdatety?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type SupplyContractCreateManyInput = {
    id?: number;
    contractId: number;
    supplyId: number;
    quantdatety: number;
};
export type SupplyContractUpdateManyMutationInput = {
    quantdatety?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type SupplyContractUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contractId?: Prisma.IntFieldUpdateOperationsInput | number;
    supplyId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantdatety?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type SupplyContractListRelationFilter = {
    every?: Prisma.SupplyContractWhereInput;
    some?: Prisma.SupplyContractWhereInput;
    none?: Prisma.SupplyContractWhereInput;
};
export type SupplyContractOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupplyContractCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    supplyId?: Prisma.SortOrder;
    quantdatety?: Prisma.SortOrder;
};
export type SupplyContractAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    supplyId?: Prisma.SortOrder;
    quantdatety?: Prisma.SortOrder;
};
export type SupplyContractMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    supplyId?: Prisma.SortOrder;
    quantdatety?: Prisma.SortOrder;
};
export type SupplyContractMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    supplyId?: Prisma.SortOrder;
    quantdatety?: Prisma.SortOrder;
};
export type SupplyContractSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    supplyId?: Prisma.SortOrder;
    quantdatety?: Prisma.SortOrder;
};
export type SupplyContractCreateNestedManyWithoutSupplyInput = {
    create?: Prisma.XOR<Prisma.SupplyContractCreateWithoutSupplyInput, Prisma.SupplyContractUncheckedCreateWithoutSupplyInput> | Prisma.SupplyContractCreateWithoutSupplyInput[] | Prisma.SupplyContractUncheckedCreateWithoutSupplyInput[];
    connectOrCreate?: Prisma.SupplyContractCreateOrConnectWithoutSupplyInput | Prisma.SupplyContractCreateOrConnectWithoutSupplyInput[];
    createMany?: Prisma.SupplyContractCreateManySupplyInputEnvelope;
    connect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
};
export type SupplyContractUncheckedCreateNestedManyWithoutSupplyInput = {
    create?: Prisma.XOR<Prisma.SupplyContractCreateWithoutSupplyInput, Prisma.SupplyContractUncheckedCreateWithoutSupplyInput> | Prisma.SupplyContractCreateWithoutSupplyInput[] | Prisma.SupplyContractUncheckedCreateWithoutSupplyInput[];
    connectOrCreate?: Prisma.SupplyContractCreateOrConnectWithoutSupplyInput | Prisma.SupplyContractCreateOrConnectWithoutSupplyInput[];
    createMany?: Prisma.SupplyContractCreateManySupplyInputEnvelope;
    connect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
};
export type SupplyContractUpdateManyWithoutSupplyNestedInput = {
    create?: Prisma.XOR<Prisma.SupplyContractCreateWithoutSupplyInput, Prisma.SupplyContractUncheckedCreateWithoutSupplyInput> | Prisma.SupplyContractCreateWithoutSupplyInput[] | Prisma.SupplyContractUncheckedCreateWithoutSupplyInput[];
    connectOrCreate?: Prisma.SupplyContractCreateOrConnectWithoutSupplyInput | Prisma.SupplyContractCreateOrConnectWithoutSupplyInput[];
    upsert?: Prisma.SupplyContractUpsertWithWhereUniqueWithoutSupplyInput | Prisma.SupplyContractUpsertWithWhereUniqueWithoutSupplyInput[];
    createMany?: Prisma.SupplyContractCreateManySupplyInputEnvelope;
    set?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    disconnect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    delete?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    connect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    update?: Prisma.SupplyContractUpdateWithWhereUniqueWithoutSupplyInput | Prisma.SupplyContractUpdateWithWhereUniqueWithoutSupplyInput[];
    updateMany?: Prisma.SupplyContractUpdateManyWithWhereWithoutSupplyInput | Prisma.SupplyContractUpdateManyWithWhereWithoutSupplyInput[];
    deleteMany?: Prisma.SupplyContractScalarWhereInput | Prisma.SupplyContractScalarWhereInput[];
};
export type SupplyContractUncheckedUpdateManyWithoutSupplyNestedInput = {
    create?: Prisma.XOR<Prisma.SupplyContractCreateWithoutSupplyInput, Prisma.SupplyContractUncheckedCreateWithoutSupplyInput> | Prisma.SupplyContractCreateWithoutSupplyInput[] | Prisma.SupplyContractUncheckedCreateWithoutSupplyInput[];
    connectOrCreate?: Prisma.SupplyContractCreateOrConnectWithoutSupplyInput | Prisma.SupplyContractCreateOrConnectWithoutSupplyInput[];
    upsert?: Prisma.SupplyContractUpsertWithWhereUniqueWithoutSupplyInput | Prisma.SupplyContractUpsertWithWhereUniqueWithoutSupplyInput[];
    createMany?: Prisma.SupplyContractCreateManySupplyInputEnvelope;
    set?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    disconnect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    delete?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    connect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    update?: Prisma.SupplyContractUpdateWithWhereUniqueWithoutSupplyInput | Prisma.SupplyContractUpdateWithWhereUniqueWithoutSupplyInput[];
    updateMany?: Prisma.SupplyContractUpdateManyWithWhereWithoutSupplyInput | Prisma.SupplyContractUpdateManyWithWhereWithoutSupplyInput[];
    deleteMany?: Prisma.SupplyContractScalarWhereInput | Prisma.SupplyContractScalarWhereInput[];
};
export type SupplyContractCreateNestedManyWithoutContractInput = {
    create?: Prisma.XOR<Prisma.SupplyContractCreateWithoutContractInput, Prisma.SupplyContractUncheckedCreateWithoutContractInput> | Prisma.SupplyContractCreateWithoutContractInput[] | Prisma.SupplyContractUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.SupplyContractCreateOrConnectWithoutContractInput | Prisma.SupplyContractCreateOrConnectWithoutContractInput[];
    createMany?: Prisma.SupplyContractCreateManyContractInputEnvelope;
    connect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
};
export type SupplyContractUncheckedCreateNestedManyWithoutContractInput = {
    create?: Prisma.XOR<Prisma.SupplyContractCreateWithoutContractInput, Prisma.SupplyContractUncheckedCreateWithoutContractInput> | Prisma.SupplyContractCreateWithoutContractInput[] | Prisma.SupplyContractUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.SupplyContractCreateOrConnectWithoutContractInput | Prisma.SupplyContractCreateOrConnectWithoutContractInput[];
    createMany?: Prisma.SupplyContractCreateManyContractInputEnvelope;
    connect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
};
export type SupplyContractUpdateManyWithoutContractNestedInput = {
    create?: Prisma.XOR<Prisma.SupplyContractCreateWithoutContractInput, Prisma.SupplyContractUncheckedCreateWithoutContractInput> | Prisma.SupplyContractCreateWithoutContractInput[] | Prisma.SupplyContractUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.SupplyContractCreateOrConnectWithoutContractInput | Prisma.SupplyContractCreateOrConnectWithoutContractInput[];
    upsert?: Prisma.SupplyContractUpsertWithWhereUniqueWithoutContractInput | Prisma.SupplyContractUpsertWithWhereUniqueWithoutContractInput[];
    createMany?: Prisma.SupplyContractCreateManyContractInputEnvelope;
    set?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    disconnect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    delete?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    connect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    update?: Prisma.SupplyContractUpdateWithWhereUniqueWithoutContractInput | Prisma.SupplyContractUpdateWithWhereUniqueWithoutContractInput[];
    updateMany?: Prisma.SupplyContractUpdateManyWithWhereWithoutContractInput | Prisma.SupplyContractUpdateManyWithWhereWithoutContractInput[];
    deleteMany?: Prisma.SupplyContractScalarWhereInput | Prisma.SupplyContractScalarWhereInput[];
};
export type SupplyContractUncheckedUpdateManyWithoutContractNestedInput = {
    create?: Prisma.XOR<Prisma.SupplyContractCreateWithoutContractInput, Prisma.SupplyContractUncheckedCreateWithoutContractInput> | Prisma.SupplyContractCreateWithoutContractInput[] | Prisma.SupplyContractUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.SupplyContractCreateOrConnectWithoutContractInput | Prisma.SupplyContractCreateOrConnectWithoutContractInput[];
    upsert?: Prisma.SupplyContractUpsertWithWhereUniqueWithoutContractInput | Prisma.SupplyContractUpsertWithWhereUniqueWithoutContractInput[];
    createMany?: Prisma.SupplyContractCreateManyContractInputEnvelope;
    set?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    disconnect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    delete?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    connect?: Prisma.SupplyContractWhereUniqueInput | Prisma.SupplyContractWhereUniqueInput[];
    update?: Prisma.SupplyContractUpdateWithWhereUniqueWithoutContractInput | Prisma.SupplyContractUpdateWithWhereUniqueWithoutContractInput[];
    updateMany?: Prisma.SupplyContractUpdateManyWithWhereWithoutContractInput | Prisma.SupplyContractUpdateManyWithWhereWithoutContractInput[];
    deleteMany?: Prisma.SupplyContractScalarWhereInput | Prisma.SupplyContractScalarWhereInput[];
};
export type SupplyContractCreateWithoutSupplyInput = {
    quantdatety: number;
    contract: Prisma.ContractCreateNestedOneWithoutSuppliesInput;
};
export type SupplyContractUncheckedCreateWithoutSupplyInput = {
    id?: number;
    contractId: number;
    quantdatety: number;
};
export type SupplyContractCreateOrConnectWithoutSupplyInput = {
    where: Prisma.SupplyContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplyContractCreateWithoutSupplyInput, Prisma.SupplyContractUncheckedCreateWithoutSupplyInput>;
};
export type SupplyContractCreateManySupplyInputEnvelope = {
    data: Prisma.SupplyContractCreateManySupplyInput | Prisma.SupplyContractCreateManySupplyInput[];
    skipDuplicates?: boolean;
};
export type SupplyContractUpsertWithWhereUniqueWithoutSupplyInput = {
    where: Prisma.SupplyContractWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplyContractUpdateWithoutSupplyInput, Prisma.SupplyContractUncheckedUpdateWithoutSupplyInput>;
    create: Prisma.XOR<Prisma.SupplyContractCreateWithoutSupplyInput, Prisma.SupplyContractUncheckedCreateWithoutSupplyInput>;
};
export type SupplyContractUpdateWithWhereUniqueWithoutSupplyInput = {
    where: Prisma.SupplyContractWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplyContractUpdateWithoutSupplyInput, Prisma.SupplyContractUncheckedUpdateWithoutSupplyInput>;
};
export type SupplyContractUpdateManyWithWhereWithoutSupplyInput = {
    where: Prisma.SupplyContractScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplyContractUpdateManyMutationInput, Prisma.SupplyContractUncheckedUpdateManyWithoutSupplyInput>;
};
export type SupplyContractScalarWhereInput = {
    AND?: Prisma.SupplyContractScalarWhereInput | Prisma.SupplyContractScalarWhereInput[];
    OR?: Prisma.SupplyContractScalarWhereInput[];
    NOT?: Prisma.SupplyContractScalarWhereInput | Prisma.SupplyContractScalarWhereInput[];
    id?: Prisma.IntFilter<"SupplyContract"> | number;
    contractId?: Prisma.IntFilter<"SupplyContract"> | number;
    supplyId?: Prisma.IntFilter<"SupplyContract"> | number;
    quantdatety?: Prisma.FloatFilter<"SupplyContract"> | number;
};
export type SupplyContractCreateWithoutContractInput = {
    quantdatety: number;
    supply: Prisma.SupplyCreateNestedOneWithoutSupplyContractInput;
};
export type SupplyContractUncheckedCreateWithoutContractInput = {
    id?: number;
    supplyId: number;
    quantdatety: number;
};
export type SupplyContractCreateOrConnectWithoutContractInput = {
    where: Prisma.SupplyContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplyContractCreateWithoutContractInput, Prisma.SupplyContractUncheckedCreateWithoutContractInput>;
};
export type SupplyContractCreateManyContractInputEnvelope = {
    data: Prisma.SupplyContractCreateManyContractInput | Prisma.SupplyContractCreateManyContractInput[];
    skipDuplicates?: boolean;
};
export type SupplyContractUpsertWithWhereUniqueWithoutContractInput = {
    where: Prisma.SupplyContractWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplyContractUpdateWithoutContractInput, Prisma.SupplyContractUncheckedUpdateWithoutContractInput>;
    create: Prisma.XOR<Prisma.SupplyContractCreateWithoutContractInput, Prisma.SupplyContractUncheckedCreateWithoutContractInput>;
};
export type SupplyContractUpdateWithWhereUniqueWithoutContractInput = {
    where: Prisma.SupplyContractWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplyContractUpdateWithoutContractInput, Prisma.SupplyContractUncheckedUpdateWithoutContractInput>;
};
export type SupplyContractUpdateManyWithWhereWithoutContractInput = {
    where: Prisma.SupplyContractScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplyContractUpdateManyMutationInput, Prisma.SupplyContractUncheckedUpdateManyWithoutContractInput>;
};
export type SupplyContractCreateManySupplyInput = {
    id?: number;
    contractId: number;
    quantdatety: number;
};
export type SupplyContractUpdateWithoutSupplyInput = {
    quantdatety?: Prisma.FloatFieldUpdateOperationsInput | number;
    contract?: Prisma.ContractUpdateOneRequiredWithoutSuppliesNestedInput;
};
export type SupplyContractUncheckedUpdateWithoutSupplyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contractId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantdatety?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type SupplyContractUncheckedUpdateManyWithoutSupplyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contractId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantdatety?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type SupplyContractCreateManyContractInput = {
    id?: number;
    supplyId: number;
    quantdatety: number;
};
export type SupplyContractUpdateWithoutContractInput = {
    quantdatety?: Prisma.FloatFieldUpdateOperationsInput | number;
    supply?: Prisma.SupplyUpdateOneRequiredWithoutSupplyContractNestedInput;
};
export type SupplyContractUncheckedUpdateWithoutContractInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplyId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantdatety?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type SupplyContractUncheckedUpdateManyWithoutContractInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplyId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantdatety?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type SupplyContractSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractId?: boolean;
    supplyId?: boolean;
    quantdatety?: boolean;
    contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
    supply?: boolean | Prisma.SupplyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplyContract"]>;
export type SupplyContractSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractId?: boolean;
    supplyId?: boolean;
    quantdatety?: boolean;
    contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
    supply?: boolean | Prisma.SupplyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplyContract"]>;
export type SupplyContractSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractId?: boolean;
    supplyId?: boolean;
    quantdatety?: boolean;
    contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
    supply?: boolean | Prisma.SupplyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplyContract"]>;
export type SupplyContractSelectScalar = {
    id?: boolean;
    contractId?: boolean;
    supplyId?: boolean;
    quantdatety?: boolean;
};
export type SupplyContractOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contractId" | "supplyId" | "quantdatety", ExtArgs["result"]["supplyContract"]>;
export type SupplyContractInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
    supply?: boolean | Prisma.SupplyDefaultArgs<ExtArgs>;
};
export type SupplyContractIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
    supply?: boolean | Prisma.SupplyDefaultArgs<ExtArgs>;
};
export type SupplyContractIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
    supply?: boolean | Prisma.SupplyDefaultArgs<ExtArgs>;
};
export type $SupplyContractPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupplyContract";
    objects: {
        contract: Prisma.$ContractPayload<ExtArgs>;
        supply: Prisma.$SupplyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        contractId: number;
        supplyId: number;
        quantdatety: number;
    }, ExtArgs["result"]["supplyContract"]>;
    composites: {};
};
export type SupplyContractGetPayload<S extends boolean | null | undefined | SupplyContractDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload, S>;
export type SupplyContractCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplyContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplyContractCountAggregateInputType | true;
};
export interface SupplyContractDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupplyContract'];
        meta: {
            name: 'SupplyContract';
        };
    };
    findUnique<T extends SupplyContractFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplyContractFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplyContractClient<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SupplyContractFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplyContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplyContractClient<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SupplyContractFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplyContractFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplyContractClient<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SupplyContractFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplyContractFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplyContractClient<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SupplyContractFindManyArgs>(args?: Prisma.SelectSubset<T, SupplyContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SupplyContractCreateArgs>(args: Prisma.SelectSubset<T, SupplyContractCreateArgs<ExtArgs>>): Prisma.Prisma__SupplyContractClient<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SupplyContractCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplyContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SupplyContractCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplyContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SupplyContractDeleteArgs>(args: Prisma.SelectSubset<T, SupplyContractDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplyContractClient<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SupplyContractUpdateArgs>(args: Prisma.SelectSubset<T, SupplyContractUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplyContractClient<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SupplyContractDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplyContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SupplyContractUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplyContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SupplyContractUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplyContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SupplyContractUpsertArgs>(args: Prisma.SelectSubset<T, SupplyContractUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplyContractClient<runtime.Types.Result.GetResult<Prisma.$SupplyContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SupplyContractCountArgs>(args?: Prisma.Subset<T, SupplyContractCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplyContractCountAggregateOutputType> : number>;
    aggregate<T extends SupplyContractAggregateArgs>(args: Prisma.Subset<T, SupplyContractAggregateArgs>): Prisma.PrismaPromise<GetSupplyContractAggregateType<T>>;
    groupBy<T extends SupplyContractGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplyContractGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplyContractGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplyContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplyContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SupplyContractFieldRefs;
}
export interface Prisma__SupplyContractClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contract<T extends Prisma.ContractDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContractDefaultArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    supply<T extends Prisma.SupplyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplyDefaultArgs<ExtArgs>>): Prisma.Prisma__SupplyClient<runtime.Types.Result.GetResult<Prisma.$SupplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SupplyContractFieldRefs {
    readonly id: Prisma.FieldRef<"SupplyContract", 'Int'>;
    readonly contractId: Prisma.FieldRef<"SupplyContract", 'Int'>;
    readonly supplyId: Prisma.FieldRef<"SupplyContract", 'Int'>;
    readonly quantdatety: Prisma.FieldRef<"SupplyContract", 'Float'>;
}
export type SupplyContractFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplyContractSelect<ExtArgs> | null;
    omit?: Prisma.SupplyContractOmit<ExtArgs> | null;
    include?: Prisma.SupplyContractInclude<ExtArgs> | null;
    where: Prisma.SupplyContractWhereUniqueInput;
};
export type SupplyContractFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplyContractSelect<ExtArgs> | null;
    omit?: Prisma.SupplyContractOmit<ExtArgs> | null;
    include?: Prisma.SupplyContractInclude<ExtArgs> | null;
    where: Prisma.SupplyContractWhereUniqueInput;
};
export type SupplyContractFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SupplyContractFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SupplyContractFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SupplyContractCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplyContractSelect<ExtArgs> | null;
    omit?: Prisma.SupplyContractOmit<ExtArgs> | null;
    include?: Prisma.SupplyContractInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupplyContractCreateInput, Prisma.SupplyContractUncheckedCreateInput>;
};
export type SupplyContractCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SupplyContractCreateManyInput | Prisma.SupplyContractCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SupplyContractCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplyContractSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SupplyContractOmit<ExtArgs> | null;
    data: Prisma.SupplyContractCreateManyInput | Prisma.SupplyContractCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SupplyContractIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SupplyContractUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplyContractSelect<ExtArgs> | null;
    omit?: Prisma.SupplyContractOmit<ExtArgs> | null;
    include?: Prisma.SupplyContractInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupplyContractUpdateInput, Prisma.SupplyContractUncheckedUpdateInput>;
    where: Prisma.SupplyContractWhereUniqueInput;
};
export type SupplyContractUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SupplyContractUpdateManyMutationInput, Prisma.SupplyContractUncheckedUpdateManyInput>;
    where?: Prisma.SupplyContractWhereInput;
    limit?: number;
};
export type SupplyContractUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplyContractSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SupplyContractOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupplyContractUpdateManyMutationInput, Prisma.SupplyContractUncheckedUpdateManyInput>;
    where?: Prisma.SupplyContractWhereInput;
    limit?: number;
    include?: Prisma.SupplyContractIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SupplyContractUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplyContractSelect<ExtArgs> | null;
    omit?: Prisma.SupplyContractOmit<ExtArgs> | null;
    include?: Prisma.SupplyContractInclude<ExtArgs> | null;
    where: Prisma.SupplyContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplyContractCreateInput, Prisma.SupplyContractUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SupplyContractUpdateInput, Prisma.SupplyContractUncheckedUpdateInput>;
};
export type SupplyContractDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplyContractSelect<ExtArgs> | null;
    omit?: Prisma.SupplyContractOmit<ExtArgs> | null;
    include?: Prisma.SupplyContractInclude<ExtArgs> | null;
    where: Prisma.SupplyContractWhereUniqueInput;
};
export type SupplyContractDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplyContractWhereInput;
    limit?: number;
};
export type SupplyContractDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupplyContractSelect<ExtArgs> | null;
    omit?: Prisma.SupplyContractOmit<ExtArgs> | null;
    include?: Prisma.SupplyContractInclude<ExtArgs> | null;
};
export {};
