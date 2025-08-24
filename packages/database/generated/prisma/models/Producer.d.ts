import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type ProducerModel = runtime.Types.Result.DefaultSelection<Prisma.$ProducerPayload>;
export type AggregateProducer = {
    _count: ProducerCountAggregateOutputType | null;
    _avg: ProducerAvgAggregateOutputType | null;
    _sum: ProducerSumAggregateOutputType | null;
    _min: ProducerMinAggregateOutputType | null;
    _max: ProducerMaxAggregateOutputType | null;
};
export type ProducerAvgAggregateOutputType = {
    id: number | null;
};
export type ProducerSumAggregateOutputType = {
    id: number | null;
};
export type ProducerMinAggregateOutputType = {
    id: number | null;
    dni: string | null;
    code: string | null;
    firstName: string | null;
    lastName1: string | null;
    lastName2: string | null;
    phone: string | null;
    productionUnitName: string | null;
    cupCard: string | null;
    mlcCard: string | null;
};
export type ProducerMaxAggregateOutputType = {
    id: number | null;
    dni: string | null;
    code: string | null;
    firstName: string | null;
    lastName1: string | null;
    lastName2: string | null;
    phone: string | null;
    productionUnitName: string | null;
    cupCard: string | null;
    mlcCard: string | null;
};
export type ProducerCountAggregateOutputType = {
    id: number;
    dni: number;
    code: number;
    firstName: number;
    lastName1: number;
    lastName2: number;
    phone: number;
    productionUnitName: number;
    cupCard: number;
    mlcCard: number;
    _all: number;
};
export type ProducerAvgAggregateInputType = {
    id?: true;
};
export type ProducerSumAggregateInputType = {
    id?: true;
};
export type ProducerMinAggregateInputType = {
    id?: true;
    dni?: true;
    code?: true;
    firstName?: true;
    lastName1?: true;
    lastName2?: true;
    phone?: true;
    productionUnitName?: true;
    cupCard?: true;
    mlcCard?: true;
};
export type ProducerMaxAggregateInputType = {
    id?: true;
    dni?: true;
    code?: true;
    firstName?: true;
    lastName1?: true;
    lastName2?: true;
    phone?: true;
    productionUnitName?: true;
    cupCard?: true;
    mlcCard?: true;
};
export type ProducerCountAggregateInputType = {
    id?: true;
    dni?: true;
    code?: true;
    firstName?: true;
    lastName1?: true;
    lastName2?: true;
    phone?: true;
    productionUnitName?: true;
    cupCard?: true;
    mlcCard?: true;
    _all?: true;
};
export type ProducerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProducerWhereInput;
    orderBy?: Prisma.ProducerOrderByWithRelationInput | Prisma.ProducerOrderByWithRelationInput[];
    cursor?: Prisma.ProducerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProducerCountAggregateInputType;
    _avg?: ProducerAvgAggregateInputType;
    _sum?: ProducerSumAggregateInputType;
    _min?: ProducerMinAggregateInputType;
    _max?: ProducerMaxAggregateInputType;
};
export type GetProducerAggregateType<T extends ProducerAggregateArgs> = {
    [P in keyof T & keyof AggregateProducer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProducer[P]> : Prisma.GetScalarType<T[P], AggregateProducer[P]>;
};
export type ProducerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProducerWhereInput;
    orderBy?: Prisma.ProducerOrderByWithAggregationInput | Prisma.ProducerOrderByWithAggregationInput[];
    by: Prisma.ProducerScalarFieldEnum[] | Prisma.ProducerScalarFieldEnum;
    having?: Prisma.ProducerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProducerCountAggregateInputType | true;
    _avg?: ProducerAvgAggregateInputType;
    _sum?: ProducerSumAggregateInputType;
    _min?: ProducerMinAggregateInputType;
    _max?: ProducerMaxAggregateInputType;
};
export type ProducerGroupByOutputType = {
    id: number;
    dni: string;
    code: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    phone: string;
    productionUnitName: string | null;
    cupCard: string;
    mlcCard: string;
    _count: ProducerCountAggregateOutputType | null;
    _avg: ProducerAvgAggregateOutputType | null;
    _sum: ProducerSumAggregateOutputType | null;
    _min: ProducerMinAggregateOutputType | null;
    _max: ProducerMaxAggregateOutputType | null;
};
type GetProducerGroupByPayload<T extends ProducerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProducerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProducerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProducerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProducerGroupByOutputType[P]>;
}>>;
export type ProducerWhereInput = {
    AND?: Prisma.ProducerWhereInput | Prisma.ProducerWhereInput[];
    OR?: Prisma.ProducerWhereInput[];
    NOT?: Prisma.ProducerWhereInput | Prisma.ProducerWhereInput[];
    id?: Prisma.IntFilter<"Producer"> | number;
    dni?: Prisma.StringFilter<"Producer"> | string;
    code?: Prisma.StringFilter<"Producer"> | string;
    firstName?: Prisma.StringFilter<"Producer"> | string;
    lastName1?: Prisma.StringFilter<"Producer"> | string;
    lastName2?: Prisma.StringFilter<"Producer"> | string;
    phone?: Prisma.StringFilter<"Producer"> | string;
    productionUnitName?: Prisma.StringNullableFilter<"Producer"> | string | null;
    cupCard?: Prisma.StringFilter<"Producer"> | string;
    mlcCard?: Prisma.StringFilter<"Producer"> | string;
    productionUnit?: Prisma.XOR<Prisma.ProductionUnitNullableScalarRelationFilter, Prisma.ProductionUnitWhereInput> | null;
    landFiles?: Prisma.LandFileListRelationFilter;
    Contract?: Prisma.ContractListRelationFilter;
};
export type ProducerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName1?: Prisma.SortOrder;
    lastName2?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    productionUnitName?: Prisma.SortOrderInput | Prisma.SortOrder;
    cupCard?: Prisma.SortOrder;
    mlcCard?: Prisma.SortOrder;
    productionUnit?: Prisma.ProductionUnitOrderByWithRelationInput;
    landFiles?: Prisma.LandFileOrderByRelationAggregateInput;
    Contract?: Prisma.ContractOrderByRelationAggregateInput;
};
export type ProducerWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    dni?: string;
    code?: string;
    AND?: Prisma.ProducerWhereInput | Prisma.ProducerWhereInput[];
    OR?: Prisma.ProducerWhereInput[];
    NOT?: Prisma.ProducerWhereInput | Prisma.ProducerWhereInput[];
    firstName?: Prisma.StringFilter<"Producer"> | string;
    lastName1?: Prisma.StringFilter<"Producer"> | string;
    lastName2?: Prisma.StringFilter<"Producer"> | string;
    phone?: Prisma.StringFilter<"Producer"> | string;
    productionUnitName?: Prisma.StringNullableFilter<"Producer"> | string | null;
    cupCard?: Prisma.StringFilter<"Producer"> | string;
    mlcCard?: Prisma.StringFilter<"Producer"> | string;
    productionUnit?: Prisma.XOR<Prisma.ProductionUnitNullableScalarRelationFilter, Prisma.ProductionUnitWhereInput> | null;
    landFiles?: Prisma.LandFileListRelationFilter;
    Contract?: Prisma.ContractListRelationFilter;
}, "id" | "dni" | "code">;
export type ProducerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName1?: Prisma.SortOrder;
    lastName2?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    productionUnitName?: Prisma.SortOrderInput | Prisma.SortOrder;
    cupCard?: Prisma.SortOrder;
    mlcCard?: Prisma.SortOrder;
    _count?: Prisma.ProducerCountOrderByAggregateInput;
    _avg?: Prisma.ProducerAvgOrderByAggregateInput;
    _max?: Prisma.ProducerMaxOrderByAggregateInput;
    _min?: Prisma.ProducerMinOrderByAggregateInput;
    _sum?: Prisma.ProducerSumOrderByAggregateInput;
};
export type ProducerScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProducerScalarWhereWithAggregatesInput | Prisma.ProducerScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProducerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProducerScalarWhereWithAggregatesInput | Prisma.ProducerScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Producer"> | number;
    dni?: Prisma.StringWithAggregatesFilter<"Producer"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Producer"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"Producer"> | string;
    lastName1?: Prisma.StringWithAggregatesFilter<"Producer"> | string;
    lastName2?: Prisma.StringWithAggregatesFilter<"Producer"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"Producer"> | string;
    productionUnitName?: Prisma.StringNullableWithAggregatesFilter<"Producer"> | string | null;
    cupCard?: Prisma.StringWithAggregatesFilter<"Producer"> | string;
    mlcCard?: Prisma.StringWithAggregatesFilter<"Producer"> | string;
};
export type ProducerCreateInput = {
    dni: string;
    code: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    phone: string;
    cupCard: string;
    mlcCard: string;
    productionUnit?: Prisma.ProductionUnitCreateNestedOneWithoutProducersInput;
    landFiles?: Prisma.LandFileCreateNestedManyWithoutProducerInput;
    Contract?: Prisma.ContractCreateNestedManyWithoutProducerInput;
};
export type ProducerUncheckedCreateInput = {
    id?: number;
    dni: string;
    code: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    phone: string;
    productionUnitName?: string | null;
    cupCard: string;
    mlcCard: string;
    landFiles?: Prisma.LandFileUncheckedCreateNestedManyWithoutProducerInput;
    Contract?: Prisma.ContractUncheckedCreateNestedManyWithoutProducerInput;
};
export type ProducerUpdateInput = {
    dni?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName1?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName2?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    cupCard?: Prisma.StringFieldUpdateOperationsInput | string;
    mlcCard?: Prisma.StringFieldUpdateOperationsInput | string;
    productionUnit?: Prisma.ProductionUnitUpdateOneWithoutProducersNestedInput;
    landFiles?: Prisma.LandFileUpdateManyWithoutProducerNestedInput;
    Contract?: Prisma.ContractUpdateManyWithoutProducerNestedInput;
};
export type ProducerUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dni?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName1?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName2?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    productionUnitName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cupCard?: Prisma.StringFieldUpdateOperationsInput | string;
    mlcCard?: Prisma.StringFieldUpdateOperationsInput | string;
    landFiles?: Prisma.LandFileUncheckedUpdateManyWithoutProducerNestedInput;
    Contract?: Prisma.ContractUncheckedUpdateManyWithoutProducerNestedInput;
};
export type ProducerCreateManyInput = {
    id?: number;
    dni: string;
    code: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    phone: string;
    productionUnitName?: string | null;
    cupCard: string;
    mlcCard: string;
};
export type ProducerUpdateManyMutationInput = {
    dni?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName1?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName2?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    cupCard?: Prisma.StringFieldUpdateOperationsInput | string;
    mlcCard?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProducerUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dni?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName1?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName2?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    productionUnitName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cupCard?: Prisma.StringFieldUpdateOperationsInput | string;
    mlcCard?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProducerListRelationFilter = {
    every?: Prisma.ProducerWhereInput;
    some?: Prisma.ProducerWhereInput;
    none?: Prisma.ProducerWhereInput;
};
export type ProducerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProducerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName1?: Prisma.SortOrder;
    lastName2?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    productionUnitName?: Prisma.SortOrder;
    cupCard?: Prisma.SortOrder;
    mlcCard?: Prisma.SortOrder;
};
export type ProducerAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProducerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName1?: Prisma.SortOrder;
    lastName2?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    productionUnitName?: Prisma.SortOrder;
    cupCard?: Prisma.SortOrder;
    mlcCard?: Prisma.SortOrder;
};
export type ProducerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName1?: Prisma.SortOrder;
    lastName2?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    productionUnitName?: Prisma.SortOrder;
    cupCard?: Prisma.SortOrder;
    mlcCard?: Prisma.SortOrder;
};
export type ProducerSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProducerNullableScalarRelationFilter = {
    is?: Prisma.ProducerWhereInput | null;
    isNot?: Prisma.ProducerWhereInput | null;
};
export type ProducerScalarRelationFilter = {
    is?: Prisma.ProducerWhereInput;
    isNot?: Prisma.ProducerWhereInput;
};
export type ProducerCreateNestedManyWithoutProductionUnitInput = {
    create?: Prisma.XOR<Prisma.ProducerCreateWithoutProductionUnitInput, Prisma.ProducerUncheckedCreateWithoutProductionUnitInput> | Prisma.ProducerCreateWithoutProductionUnitInput[] | Prisma.ProducerUncheckedCreateWithoutProductionUnitInput[];
    connectOrCreate?: Prisma.ProducerCreateOrConnectWithoutProductionUnitInput | Prisma.ProducerCreateOrConnectWithoutProductionUnitInput[];
    createMany?: Prisma.ProducerCreateManyProductionUnitInputEnvelope;
    connect?: Prisma.ProducerWhereUniqueInput | Prisma.ProducerWhereUniqueInput[];
};
export type ProducerUncheckedCreateNestedManyWithoutProductionUnitInput = {
    create?: Prisma.XOR<Prisma.ProducerCreateWithoutProductionUnitInput, Prisma.ProducerUncheckedCreateWithoutProductionUnitInput> | Prisma.ProducerCreateWithoutProductionUnitInput[] | Prisma.ProducerUncheckedCreateWithoutProductionUnitInput[];
    connectOrCreate?: Prisma.ProducerCreateOrConnectWithoutProductionUnitInput | Prisma.ProducerCreateOrConnectWithoutProductionUnitInput[];
    createMany?: Prisma.ProducerCreateManyProductionUnitInputEnvelope;
    connect?: Prisma.ProducerWhereUniqueInput | Prisma.ProducerWhereUniqueInput[];
};
export type ProducerUpdateManyWithoutProductionUnitNestedInput = {
    create?: Prisma.XOR<Prisma.ProducerCreateWithoutProductionUnitInput, Prisma.ProducerUncheckedCreateWithoutProductionUnitInput> | Prisma.ProducerCreateWithoutProductionUnitInput[] | Prisma.ProducerUncheckedCreateWithoutProductionUnitInput[];
    connectOrCreate?: Prisma.ProducerCreateOrConnectWithoutProductionUnitInput | Prisma.ProducerCreateOrConnectWithoutProductionUnitInput[];
    upsert?: Prisma.ProducerUpsertWithWhereUniqueWithoutProductionUnitInput | Prisma.ProducerUpsertWithWhereUniqueWithoutProductionUnitInput[];
    createMany?: Prisma.ProducerCreateManyProductionUnitInputEnvelope;
    set?: Prisma.ProducerWhereUniqueInput | Prisma.ProducerWhereUniqueInput[];
    disconnect?: Prisma.ProducerWhereUniqueInput | Prisma.ProducerWhereUniqueInput[];
    delete?: Prisma.ProducerWhereUniqueInput | Prisma.ProducerWhereUniqueInput[];
    connect?: Prisma.ProducerWhereUniqueInput | Prisma.ProducerWhereUniqueInput[];
    update?: Prisma.ProducerUpdateWithWhereUniqueWithoutProductionUnitInput | Prisma.ProducerUpdateWithWhereUniqueWithoutProductionUnitInput[];
    updateMany?: Prisma.ProducerUpdateManyWithWhereWithoutProductionUnitInput | Prisma.ProducerUpdateManyWithWhereWithoutProductionUnitInput[];
    deleteMany?: Prisma.ProducerScalarWhereInput | Prisma.ProducerScalarWhereInput[];
};
export type ProducerUncheckedUpdateManyWithoutProductionUnitNestedInput = {
    create?: Prisma.XOR<Prisma.ProducerCreateWithoutProductionUnitInput, Prisma.ProducerUncheckedCreateWithoutProductionUnitInput> | Prisma.ProducerCreateWithoutProductionUnitInput[] | Prisma.ProducerUncheckedCreateWithoutProductionUnitInput[];
    connectOrCreate?: Prisma.ProducerCreateOrConnectWithoutProductionUnitInput | Prisma.ProducerCreateOrConnectWithoutProductionUnitInput[];
    upsert?: Prisma.ProducerUpsertWithWhereUniqueWithoutProductionUnitInput | Prisma.ProducerUpsertWithWhereUniqueWithoutProductionUnitInput[];
    createMany?: Prisma.ProducerCreateManyProductionUnitInputEnvelope;
    set?: Prisma.ProducerWhereUniqueInput | Prisma.ProducerWhereUniqueInput[];
    disconnect?: Prisma.ProducerWhereUniqueInput | Prisma.ProducerWhereUniqueInput[];
    delete?: Prisma.ProducerWhereUniqueInput | Prisma.ProducerWhereUniqueInput[];
    connect?: Prisma.ProducerWhereUniqueInput | Prisma.ProducerWhereUniqueInput[];
    update?: Prisma.ProducerUpdateWithWhereUniqueWithoutProductionUnitInput | Prisma.ProducerUpdateWithWhereUniqueWithoutProductionUnitInput[];
    updateMany?: Prisma.ProducerUpdateManyWithWhereWithoutProductionUnitInput | Prisma.ProducerUpdateManyWithWhereWithoutProductionUnitInput[];
    deleteMany?: Prisma.ProducerScalarWhereInput | Prisma.ProducerScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ProducerCreateNestedOneWithoutLandFilesInput = {
    create?: Prisma.XOR<Prisma.ProducerCreateWithoutLandFilesInput, Prisma.ProducerUncheckedCreateWithoutLandFilesInput>;
    connectOrCreate?: Prisma.ProducerCreateOrConnectWithoutLandFilesInput;
    connect?: Prisma.ProducerWhereUniqueInput;
};
export type ProducerUpdateOneWithoutLandFilesNestedInput = {
    create?: Prisma.XOR<Prisma.ProducerCreateWithoutLandFilesInput, Prisma.ProducerUncheckedCreateWithoutLandFilesInput>;
    connectOrCreate?: Prisma.ProducerCreateOrConnectWithoutLandFilesInput;
    upsert?: Prisma.ProducerUpsertWithoutLandFilesInput;
    disconnect?: Prisma.ProducerWhereInput | boolean;
    delete?: Prisma.ProducerWhereInput | boolean;
    connect?: Prisma.ProducerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProducerUpdateToOneWithWhereWithoutLandFilesInput, Prisma.ProducerUpdateWithoutLandFilesInput>, Prisma.ProducerUncheckedUpdateWithoutLandFilesInput>;
};
export type ProducerCreateNestedOneWithoutContractInput = {
    create?: Prisma.XOR<Prisma.ProducerCreateWithoutContractInput, Prisma.ProducerUncheckedCreateWithoutContractInput>;
    connectOrCreate?: Prisma.ProducerCreateOrConnectWithoutContractInput;
    connect?: Prisma.ProducerWhereUniqueInput;
};
export type ProducerUpdateOneRequiredWithoutContractNestedInput = {
    create?: Prisma.XOR<Prisma.ProducerCreateWithoutContractInput, Prisma.ProducerUncheckedCreateWithoutContractInput>;
    connectOrCreate?: Prisma.ProducerCreateOrConnectWithoutContractInput;
    upsert?: Prisma.ProducerUpsertWithoutContractInput;
    connect?: Prisma.ProducerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProducerUpdateToOneWithWhereWithoutContractInput, Prisma.ProducerUpdateWithoutContractInput>, Prisma.ProducerUncheckedUpdateWithoutContractInput>;
};
export type ProducerCreateWithoutProductionUnitInput = {
    dni: string;
    code: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    phone: string;
    cupCard: string;
    mlcCard: string;
    landFiles?: Prisma.LandFileCreateNestedManyWithoutProducerInput;
    Contract?: Prisma.ContractCreateNestedManyWithoutProducerInput;
};
export type ProducerUncheckedCreateWithoutProductionUnitInput = {
    id?: number;
    dni: string;
    code: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    phone: string;
    cupCard: string;
    mlcCard: string;
    landFiles?: Prisma.LandFileUncheckedCreateNestedManyWithoutProducerInput;
    Contract?: Prisma.ContractUncheckedCreateNestedManyWithoutProducerInput;
};
export type ProducerCreateOrConnectWithoutProductionUnitInput = {
    where: Prisma.ProducerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProducerCreateWithoutProductionUnitInput, Prisma.ProducerUncheckedCreateWithoutProductionUnitInput>;
};
export type ProducerCreateManyProductionUnitInputEnvelope = {
    data: Prisma.ProducerCreateManyProductionUnitInput | Prisma.ProducerCreateManyProductionUnitInput[];
    skipDuplicates?: boolean;
};
export type ProducerUpsertWithWhereUniqueWithoutProductionUnitInput = {
    where: Prisma.ProducerWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProducerUpdateWithoutProductionUnitInput, Prisma.ProducerUncheckedUpdateWithoutProductionUnitInput>;
    create: Prisma.XOR<Prisma.ProducerCreateWithoutProductionUnitInput, Prisma.ProducerUncheckedCreateWithoutProductionUnitInput>;
};
export type ProducerUpdateWithWhereUniqueWithoutProductionUnitInput = {
    where: Prisma.ProducerWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProducerUpdateWithoutProductionUnitInput, Prisma.ProducerUncheckedUpdateWithoutProductionUnitInput>;
};
export type ProducerUpdateManyWithWhereWithoutProductionUnitInput = {
    where: Prisma.ProducerScalarWhereInput;
    data: Prisma.XOR<Prisma.ProducerUpdateManyMutationInput, Prisma.ProducerUncheckedUpdateManyWithoutProductionUnitInput>;
};
export type ProducerScalarWhereInput = {
    AND?: Prisma.ProducerScalarWhereInput | Prisma.ProducerScalarWhereInput[];
    OR?: Prisma.ProducerScalarWhereInput[];
    NOT?: Prisma.ProducerScalarWhereInput | Prisma.ProducerScalarWhereInput[];
    id?: Prisma.IntFilter<"Producer"> | number;
    dni?: Prisma.StringFilter<"Producer"> | string;
    code?: Prisma.StringFilter<"Producer"> | string;
    firstName?: Prisma.StringFilter<"Producer"> | string;
    lastName1?: Prisma.StringFilter<"Producer"> | string;
    lastName2?: Prisma.StringFilter<"Producer"> | string;
    phone?: Prisma.StringFilter<"Producer"> | string;
    productionUnitName?: Prisma.StringNullableFilter<"Producer"> | string | null;
    cupCard?: Prisma.StringFilter<"Producer"> | string;
    mlcCard?: Prisma.StringFilter<"Producer"> | string;
};
export type ProducerCreateWithoutLandFilesInput = {
    dni: string;
    code: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    phone: string;
    cupCard: string;
    mlcCard: string;
    productionUnit?: Prisma.ProductionUnitCreateNestedOneWithoutProducersInput;
    Contract?: Prisma.ContractCreateNestedManyWithoutProducerInput;
};
export type ProducerUncheckedCreateWithoutLandFilesInput = {
    id?: number;
    dni: string;
    code: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    phone: string;
    productionUnitName?: string | null;
    cupCard: string;
    mlcCard: string;
    Contract?: Prisma.ContractUncheckedCreateNestedManyWithoutProducerInput;
};
export type ProducerCreateOrConnectWithoutLandFilesInput = {
    where: Prisma.ProducerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProducerCreateWithoutLandFilesInput, Prisma.ProducerUncheckedCreateWithoutLandFilesInput>;
};
export type ProducerUpsertWithoutLandFilesInput = {
    update: Prisma.XOR<Prisma.ProducerUpdateWithoutLandFilesInput, Prisma.ProducerUncheckedUpdateWithoutLandFilesInput>;
    create: Prisma.XOR<Prisma.ProducerCreateWithoutLandFilesInput, Prisma.ProducerUncheckedCreateWithoutLandFilesInput>;
    where?: Prisma.ProducerWhereInput;
};
export type ProducerUpdateToOneWithWhereWithoutLandFilesInput = {
    where?: Prisma.ProducerWhereInput;
    data: Prisma.XOR<Prisma.ProducerUpdateWithoutLandFilesInput, Prisma.ProducerUncheckedUpdateWithoutLandFilesInput>;
};
export type ProducerUpdateWithoutLandFilesInput = {
    dni?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName1?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName2?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    cupCard?: Prisma.StringFieldUpdateOperationsInput | string;
    mlcCard?: Prisma.StringFieldUpdateOperationsInput | string;
    productionUnit?: Prisma.ProductionUnitUpdateOneWithoutProducersNestedInput;
    Contract?: Prisma.ContractUpdateManyWithoutProducerNestedInput;
};
export type ProducerUncheckedUpdateWithoutLandFilesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dni?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName1?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName2?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    productionUnitName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cupCard?: Prisma.StringFieldUpdateOperationsInput | string;
    mlcCard?: Prisma.StringFieldUpdateOperationsInput | string;
    Contract?: Prisma.ContractUncheckedUpdateManyWithoutProducerNestedInput;
};
export type ProducerCreateWithoutContractInput = {
    dni: string;
    code: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    phone: string;
    cupCard: string;
    mlcCard: string;
    productionUnit?: Prisma.ProductionUnitCreateNestedOneWithoutProducersInput;
    landFiles?: Prisma.LandFileCreateNestedManyWithoutProducerInput;
};
export type ProducerUncheckedCreateWithoutContractInput = {
    id?: number;
    dni: string;
    code: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    phone: string;
    productionUnitName?: string | null;
    cupCard: string;
    mlcCard: string;
    landFiles?: Prisma.LandFileUncheckedCreateNestedManyWithoutProducerInput;
};
export type ProducerCreateOrConnectWithoutContractInput = {
    where: Prisma.ProducerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProducerCreateWithoutContractInput, Prisma.ProducerUncheckedCreateWithoutContractInput>;
};
export type ProducerUpsertWithoutContractInput = {
    update: Prisma.XOR<Prisma.ProducerUpdateWithoutContractInput, Prisma.ProducerUncheckedUpdateWithoutContractInput>;
    create: Prisma.XOR<Prisma.ProducerCreateWithoutContractInput, Prisma.ProducerUncheckedCreateWithoutContractInput>;
    where?: Prisma.ProducerWhereInput;
};
export type ProducerUpdateToOneWithWhereWithoutContractInput = {
    where?: Prisma.ProducerWhereInput;
    data: Prisma.XOR<Prisma.ProducerUpdateWithoutContractInput, Prisma.ProducerUncheckedUpdateWithoutContractInput>;
};
export type ProducerUpdateWithoutContractInput = {
    dni?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName1?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName2?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    cupCard?: Prisma.StringFieldUpdateOperationsInput | string;
    mlcCard?: Prisma.StringFieldUpdateOperationsInput | string;
    productionUnit?: Prisma.ProductionUnitUpdateOneWithoutProducersNestedInput;
    landFiles?: Prisma.LandFileUpdateManyWithoutProducerNestedInput;
};
export type ProducerUncheckedUpdateWithoutContractInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dni?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName1?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName2?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    productionUnitName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cupCard?: Prisma.StringFieldUpdateOperationsInput | string;
    mlcCard?: Prisma.StringFieldUpdateOperationsInput | string;
    landFiles?: Prisma.LandFileUncheckedUpdateManyWithoutProducerNestedInput;
};
export type ProducerCreateManyProductionUnitInput = {
    id?: number;
    dni: string;
    code: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    phone: string;
    cupCard: string;
    mlcCard: string;
};
export type ProducerUpdateWithoutProductionUnitInput = {
    dni?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName1?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName2?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    cupCard?: Prisma.StringFieldUpdateOperationsInput | string;
    mlcCard?: Prisma.StringFieldUpdateOperationsInput | string;
    landFiles?: Prisma.LandFileUpdateManyWithoutProducerNestedInput;
    Contract?: Prisma.ContractUpdateManyWithoutProducerNestedInput;
};
export type ProducerUncheckedUpdateWithoutProductionUnitInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dni?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName1?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName2?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    cupCard?: Prisma.StringFieldUpdateOperationsInput | string;
    mlcCard?: Prisma.StringFieldUpdateOperationsInput | string;
    landFiles?: Prisma.LandFileUncheckedUpdateManyWithoutProducerNestedInput;
    Contract?: Prisma.ContractUncheckedUpdateManyWithoutProducerNestedInput;
};
export type ProducerUncheckedUpdateManyWithoutProductionUnitInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dni?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName1?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName2?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    cupCard?: Prisma.StringFieldUpdateOperationsInput | string;
    mlcCard?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProducerCountOutputType = {
    landFiles: number;
    Contract: number;
};
export type ProducerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    landFiles?: boolean | ProducerCountOutputTypeCountLandFilesArgs;
    Contract?: boolean | ProducerCountOutputTypeCountContractArgs;
};
export type ProducerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerCountOutputTypeSelect<ExtArgs> | null;
};
export type ProducerCountOutputTypeCountLandFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LandFileWhereInput;
};
export type ProducerCountOutputTypeCountContractArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContractWhereInput;
};
export type ProducerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dni?: boolean;
    code?: boolean;
    firstName?: boolean;
    lastName1?: boolean;
    lastName2?: boolean;
    phone?: boolean;
    productionUnitName?: boolean;
    cupCard?: boolean;
    mlcCard?: boolean;
    productionUnit?: boolean | Prisma.Producer$productionUnitArgs<ExtArgs>;
    landFiles?: boolean | Prisma.Producer$landFilesArgs<ExtArgs>;
    Contract?: boolean | Prisma.Producer$ContractArgs<ExtArgs>;
    _count?: boolean | Prisma.ProducerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["producer"]>;
export type ProducerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dni?: boolean;
    code?: boolean;
    firstName?: boolean;
    lastName1?: boolean;
    lastName2?: boolean;
    phone?: boolean;
    productionUnitName?: boolean;
    cupCard?: boolean;
    mlcCard?: boolean;
    productionUnit?: boolean | Prisma.Producer$productionUnitArgs<ExtArgs>;
}, ExtArgs["result"]["producer"]>;
export type ProducerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dni?: boolean;
    code?: boolean;
    firstName?: boolean;
    lastName1?: boolean;
    lastName2?: boolean;
    phone?: boolean;
    productionUnitName?: boolean;
    cupCard?: boolean;
    mlcCard?: boolean;
    productionUnit?: boolean | Prisma.Producer$productionUnitArgs<ExtArgs>;
}, ExtArgs["result"]["producer"]>;
export type ProducerSelectScalar = {
    id?: boolean;
    dni?: boolean;
    code?: boolean;
    firstName?: boolean;
    lastName1?: boolean;
    lastName2?: boolean;
    phone?: boolean;
    productionUnitName?: boolean;
    cupCard?: boolean;
    mlcCard?: boolean;
};
export type ProducerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dni" | "code" | "firstName" | "lastName1" | "lastName2" | "phone" | "productionUnitName" | "cupCard" | "mlcCard", ExtArgs["result"]["producer"]>;
export type ProducerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productionUnit?: boolean | Prisma.Producer$productionUnitArgs<ExtArgs>;
    landFiles?: boolean | Prisma.Producer$landFilesArgs<ExtArgs>;
    Contract?: boolean | Prisma.Producer$ContractArgs<ExtArgs>;
    _count?: boolean | Prisma.ProducerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProducerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productionUnit?: boolean | Prisma.Producer$productionUnitArgs<ExtArgs>;
};
export type ProducerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productionUnit?: boolean | Prisma.Producer$productionUnitArgs<ExtArgs>;
};
export type $ProducerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Producer";
    objects: {
        productionUnit: Prisma.$ProductionUnitPayload<ExtArgs> | null;
        landFiles: Prisma.$LandFilePayload<ExtArgs>[];
        Contract: Prisma.$ContractPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        dni: string;
        code: string;
        firstName: string;
        lastName1: string;
        lastName2: string;
        phone: string;
        productionUnitName: string | null;
        cupCard: string;
        mlcCard: string;
    }, ExtArgs["result"]["producer"]>;
    composites: {};
};
export type ProducerGetPayload<S extends boolean | null | undefined | ProducerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProducerPayload, S>;
export type ProducerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProducerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProducerCountAggregateInputType | true;
};
export interface ProducerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Producer'];
        meta: {
            name: 'Producer';
        };
    };
    findUnique<T extends ProducerFindUniqueArgs>(args: Prisma.SelectSubset<T, ProducerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProducerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProducerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProducerFindFirstArgs>(args?: Prisma.SelectSubset<T, ProducerFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProducerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProducerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProducerFindManyArgs>(args?: Prisma.SelectSubset<T, ProducerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProducerCreateArgs>(args: Prisma.SelectSubset<T, ProducerCreateArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProducerCreateManyArgs>(args?: Prisma.SelectSubset<T, ProducerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProducerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProducerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProducerDeleteArgs>(args: Prisma.SelectSubset<T, ProducerDeleteArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProducerUpdateArgs>(args: Prisma.SelectSubset<T, ProducerUpdateArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProducerDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProducerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProducerUpdateManyArgs>(args: Prisma.SelectSubset<T, ProducerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProducerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProducerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProducerUpsertArgs>(args: Prisma.SelectSubset<T, ProducerUpsertArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProducerCountArgs>(args?: Prisma.Subset<T, ProducerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProducerCountAggregateOutputType> : number>;
    aggregate<T extends ProducerAggregateArgs>(args: Prisma.Subset<T, ProducerAggregateArgs>): Prisma.PrismaPromise<GetProducerAggregateType<T>>;
    groupBy<T extends ProducerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProducerGroupByArgs['orderBy'];
    } : {
        orderBy?: ProducerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProducerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProducerFieldRefs;
}
export interface Prisma__ProducerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    productionUnit<T extends Prisma.Producer$productionUnitArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producer$productionUnitArgs<ExtArgs>>): Prisma.Prisma__ProductionUnitClient<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    landFiles<T extends Prisma.Producer$landFilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producer$landFilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Contract<T extends Prisma.Producer$ContractArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producer$ContractArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProducerFieldRefs {
    readonly id: Prisma.FieldRef<"Producer", 'Int'>;
    readonly dni: Prisma.FieldRef<"Producer", 'String'>;
    readonly code: Prisma.FieldRef<"Producer", 'String'>;
    readonly firstName: Prisma.FieldRef<"Producer", 'String'>;
    readonly lastName1: Prisma.FieldRef<"Producer", 'String'>;
    readonly lastName2: Prisma.FieldRef<"Producer", 'String'>;
    readonly phone: Prisma.FieldRef<"Producer", 'String'>;
    readonly productionUnitName: Prisma.FieldRef<"Producer", 'String'>;
    readonly cupCard: Prisma.FieldRef<"Producer", 'String'>;
    readonly mlcCard: Prisma.FieldRef<"Producer", 'String'>;
}
export type ProducerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where: Prisma.ProducerWhereUniqueInput;
};
export type ProducerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where: Prisma.ProducerWhereUniqueInput;
};
export type ProducerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProducerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProducerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProducerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProducerCreateInput, Prisma.ProducerUncheckedCreateInput>;
};
export type ProducerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProducerCreateManyInput | Prisma.ProducerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProducerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    data: Prisma.ProducerCreateManyInput | Prisma.ProducerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProducerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProducerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProducerUpdateInput, Prisma.ProducerUncheckedUpdateInput>;
    where: Prisma.ProducerWhereUniqueInput;
};
export type ProducerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProducerUpdateManyMutationInput, Prisma.ProducerUncheckedUpdateManyInput>;
    where?: Prisma.ProducerWhereInput;
    limit?: number;
};
export type ProducerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProducerUpdateManyMutationInput, Prisma.ProducerUncheckedUpdateManyInput>;
    where?: Prisma.ProducerWhereInput;
    limit?: number;
    include?: Prisma.ProducerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProducerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where: Prisma.ProducerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProducerCreateInput, Prisma.ProducerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProducerUpdateInput, Prisma.ProducerUncheckedUpdateInput>;
};
export type ProducerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where: Prisma.ProducerWhereUniqueInput;
};
export type ProducerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProducerWhereInput;
    limit?: number;
};
export type Producer$productionUnitArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
    where?: Prisma.ProductionUnitWhereInput;
};
export type Producer$landFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Producer$ContractArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProducerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
};
export {};
