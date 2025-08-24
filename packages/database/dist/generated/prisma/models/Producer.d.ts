/**
 * This file exports the `Producer` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Producer
 *
 */
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
    /**
     * Filter which Producer to aggregate.
     */
    where?: Prisma.ProducerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Producers to fetch.
     */
    orderBy?: Prisma.ProducerOrderByWithRelationInput | Prisma.ProducerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProducerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Producers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Producers
    **/
    _count?: true | ProducerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProducerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProducerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProducerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
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
/**
 * Count Type ProducerCountOutputType
 */
export type ProducerCountOutputType = {
    landFiles: number;
    Contract: number;
};
export type ProducerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    landFiles?: boolean | ProducerCountOutputTypeCountLandFilesArgs;
    Contract?: boolean | ProducerCountOutputTypeCountContractArgs;
};
/**
 * ProducerCountOutputType without action
 */
export type ProducerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProducerCountOutputType
     */
    select?: Prisma.ProducerCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProducerCountOutputType without action
 */
export type ProducerCountOutputTypeCountLandFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LandFileWhereInput;
};
/**
 * ProducerCountOutputType without action
 */
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
    /**
     * Find zero or one Producer that matches the filter.
     * @param {ProducerFindUniqueArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProducerFindUniqueArgs>(args: Prisma.SelectSubset<T, ProducerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Producer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProducerFindUniqueOrThrowArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProducerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProducerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Producer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindFirstArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProducerFindFirstArgs>(args?: Prisma.SelectSubset<T, ProducerFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Producer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindFirstOrThrowArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProducerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProducerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Producers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Producers
     * const producers = await prisma.producer.findMany()
     *
     * // Get first 10 Producers
     * const producers = await prisma.producer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const producerWithIdOnly = await prisma.producer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProducerFindManyArgs>(args?: Prisma.SelectSubset<T, ProducerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Producer.
     * @param {ProducerCreateArgs} args - Arguments to create a Producer.
     * @example
     * // Create one Producer
     * const Producer = await prisma.producer.create({
     *   data: {
     *     // ... data to create a Producer
     *   }
     * })
     *
     */
    create<T extends ProducerCreateArgs>(args: Prisma.SelectSubset<T, ProducerCreateArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Producers.
     * @param {ProducerCreateManyArgs} args - Arguments to create many Producers.
     * @example
     * // Create many Producers
     * const producer = await prisma.producer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProducerCreateManyArgs>(args?: Prisma.SelectSubset<T, ProducerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Producers and returns the data saved in the database.
     * @param {ProducerCreateManyAndReturnArgs} args - Arguments to create many Producers.
     * @example
     * // Create many Producers
     * const producer = await prisma.producer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Producers and only return the `id`
     * const producerWithIdOnly = await prisma.producer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProducerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProducerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Producer.
     * @param {ProducerDeleteArgs} args - Arguments to delete one Producer.
     * @example
     * // Delete one Producer
     * const Producer = await prisma.producer.delete({
     *   where: {
     *     // ... filter to delete one Producer
     *   }
     * })
     *
     */
    delete<T extends ProducerDeleteArgs>(args: Prisma.SelectSubset<T, ProducerDeleteArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Producer.
     * @param {ProducerUpdateArgs} args - Arguments to update one Producer.
     * @example
     * // Update one Producer
     * const producer = await prisma.producer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProducerUpdateArgs>(args: Prisma.SelectSubset<T, ProducerUpdateArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Producers.
     * @param {ProducerDeleteManyArgs} args - Arguments to filter Producers to delete.
     * @example
     * // Delete a few Producers
     * const { count } = await prisma.producer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProducerDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProducerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Producers
     * const producer = await prisma.producer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProducerUpdateManyArgs>(args: Prisma.SelectSubset<T, ProducerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Producers and returns the data updated in the database.
     * @param {ProducerUpdateManyAndReturnArgs} args - Arguments to update many Producers.
     * @example
     * // Update many Producers
     * const producer = await prisma.producer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Producers and only return the `id`
     * const producerWithIdOnly = await prisma.producer.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProducerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProducerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Producer.
     * @param {ProducerUpsertArgs} args - Arguments to update or create a Producer.
     * @example
     * // Update or create a Producer
     * const producer = await prisma.producer.upsert({
     *   create: {
     *     // ... data to create a Producer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producer we want to update
     *   }
     * })
     */
    upsert<T extends ProducerUpsertArgs>(args: Prisma.SelectSubset<T, ProducerUpsertArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerCountArgs} args - Arguments to filter Producers to count.
     * @example
     * // Count the number of Producers
     * const count = await prisma.producer.count({
     *   where: {
     *     // ... the filter for the Producers we want to count
     *   }
     * })
    **/
    count<T extends ProducerCountArgs>(args?: Prisma.Subset<T, ProducerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProducerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProducerAggregateArgs>(args: Prisma.Subset<T, ProducerAggregateArgs>): Prisma.PrismaPromise<GetProducerAggregateType<T>>;
    /**
     * Group by Producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerGroupByArgs} args - Group by arguments.
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
    /**
     * Fields of the Producer model
     */
    readonly fields: ProducerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Producer.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProducerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    productionUnit<T extends Prisma.Producer$productionUnitArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producer$productionUnitArgs<ExtArgs>>): Prisma.Prisma__ProductionUnitClient<runtime.Types.Result.GetResult<Prisma.$ProductionUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    landFiles<T extends Prisma.Producer$landFilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producer$landFilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Contract<T extends Prisma.Producer$ContractArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producer$ContractArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Producer model
 */
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
/**
 * Producer findUnique
 */
export type ProducerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    /**
     * Filter, which Producer to fetch.
     */
    where: Prisma.ProducerWhereUniqueInput;
};
/**
 * Producer findUniqueOrThrow
 */
export type ProducerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    /**
     * Filter, which Producer to fetch.
     */
    where: Prisma.ProducerWhereUniqueInput;
};
/**
 * Producer findFirst
 */
export type ProducerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    /**
     * Filter, which Producer to fetch.
     */
    where?: Prisma.ProducerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Producers to fetch.
     */
    orderBy?: Prisma.ProducerOrderByWithRelationInput | Prisma.ProducerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Producers.
     */
    cursor?: Prisma.ProducerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Producers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Producers.
     */
    distinct?: Prisma.ProducerScalarFieldEnum | Prisma.ProducerScalarFieldEnum[];
};
/**
 * Producer findFirstOrThrow
 */
export type ProducerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    /**
     * Filter, which Producer to fetch.
     */
    where?: Prisma.ProducerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Producers to fetch.
     */
    orderBy?: Prisma.ProducerOrderByWithRelationInput | Prisma.ProducerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Producers.
     */
    cursor?: Prisma.ProducerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Producers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Producers.
     */
    distinct?: Prisma.ProducerScalarFieldEnum | Prisma.ProducerScalarFieldEnum[];
};
/**
 * Producer findMany
 */
export type ProducerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    /**
     * Filter, which Producers to fetch.
     */
    where?: Prisma.ProducerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Producers to fetch.
     */
    orderBy?: Prisma.ProducerOrderByWithRelationInput | Prisma.ProducerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Producers.
     */
    cursor?: Prisma.ProducerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Producers.
     */
    skip?: number;
    distinct?: Prisma.ProducerScalarFieldEnum | Prisma.ProducerScalarFieldEnum[];
};
/**
 * Producer create
 */
export type ProducerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    /**
     * The data needed to create a Producer.
     */
    data: Prisma.XOR<Prisma.ProducerCreateInput, Prisma.ProducerUncheckedCreateInput>;
};
/**
 * Producer createMany
 */
export type ProducerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Producers.
     */
    data: Prisma.ProducerCreateManyInput | Prisma.ProducerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Producer createManyAndReturn
 */
export type ProducerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * The data used to create many Producers.
     */
    data: Prisma.ProducerCreateManyInput | Prisma.ProducerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Producer update
 */
export type ProducerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    /**
     * The data needed to update a Producer.
     */
    data: Prisma.XOR<Prisma.ProducerUpdateInput, Prisma.ProducerUncheckedUpdateInput>;
    /**
     * Choose, which Producer to update.
     */
    where: Prisma.ProducerWhereUniqueInput;
};
/**
 * Producer updateMany
 */
export type ProducerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Producers.
     */
    data: Prisma.XOR<Prisma.ProducerUpdateManyMutationInput, Prisma.ProducerUncheckedUpdateManyInput>;
    /**
     * Filter which Producers to update
     */
    where?: Prisma.ProducerWhereInput;
    /**
     * Limit how many Producers to update.
     */
    limit?: number;
};
/**
 * Producer updateManyAndReturn
 */
export type ProducerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * The data used to update Producers.
     */
    data: Prisma.XOR<Prisma.ProducerUpdateManyMutationInput, Prisma.ProducerUncheckedUpdateManyInput>;
    /**
     * Filter which Producers to update
     */
    where?: Prisma.ProducerWhereInput;
    /**
     * Limit how many Producers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Producer upsert
 */
export type ProducerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    /**
     * The filter to search for the Producer to update in case it exists.
     */
    where: Prisma.ProducerWhereUniqueInput;
    /**
     * In case the Producer found by the `where` argument doesn't exist, create a new Producer with this data.
     */
    create: Prisma.XOR<Prisma.ProducerCreateInput, Prisma.ProducerUncheckedCreateInput>;
    /**
     * In case the Producer was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProducerUpdateInput, Prisma.ProducerUncheckedUpdateInput>;
};
/**
 * Producer delete
 */
export type ProducerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    /**
     * Filter which Producer to delete.
     */
    where: Prisma.ProducerWhereUniqueInput;
};
/**
 * Producer deleteMany
 */
export type ProducerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Producers to delete
     */
    where?: Prisma.ProducerWhereInput;
    /**
     * Limit how many Producers to delete.
     */
    limit?: number;
};
/**
 * Producer.productionUnit
 */
export type Producer$productionUnitArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionUnit
     */
    select?: Prisma.ProductionUnitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductionUnit
     */
    omit?: Prisma.ProductionUnitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductionUnitInclude<ExtArgs> | null;
    where?: Prisma.ProductionUnitWhereInput;
};
/**
 * Producer.landFiles
 */
export type Producer$landFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandFile
     */
    select?: Prisma.LandFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LandFile
     */
    omit?: Prisma.LandFileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandFileInclude<ExtArgs> | null;
    where?: Prisma.LandFileWhereInput;
    orderBy?: Prisma.LandFileOrderByWithRelationInput | Prisma.LandFileOrderByWithRelationInput[];
    cursor?: Prisma.LandFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LandFileScalarFieldEnum | Prisma.LandFileScalarFieldEnum[];
};
/**
 * Producer.Contract
 */
export type Producer$ContractArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: Prisma.ContractSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contract
     */
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithRelationInput | Prisma.ContractOrderByWithRelationInput[];
    cursor?: Prisma.ContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractScalarFieldEnum | Prisma.ContractScalarFieldEnum[];
};
/**
 * Producer without action
 */
export type ProducerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producer
     */
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProducerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Producer.d.ts.map