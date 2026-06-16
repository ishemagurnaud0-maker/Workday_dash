import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeeModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeePayload>;
export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
};
export type EmployeeAvgAggregateOutputType = {
    salary: number | null;
};
export type EmployeeSumAggregateOutputType = {
    salary: number | null;
};
export type EmployeeMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    phoneNumber: string | null;
    salary: number | null;
    companyId: string | null;
    createdAt: Date | null;
};
export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    phoneNumber: string | null;
    salary: number | null;
    companyId: string | null;
    createdAt: Date | null;
};
export type EmployeeCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    phoneNumber: number;
    salary: number;
    companyId: number;
    createdAt: number;
    _all: number;
};
export type EmployeeAvgAggregateInputType = {
    salary?: true;
};
export type EmployeeSumAggregateInputType = {
    salary?: true;
};
export type EmployeeMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    phoneNumber?: true;
    salary?: true;
    companyId?: true;
    createdAt?: true;
};
export type EmployeeMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    phoneNumber?: true;
    salary?: true;
    companyId?: true;
    createdAt?: true;
};
export type EmployeeCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    phoneNumber?: true;
    salary?: true;
    companyId?: true;
    createdAt?: true;
    _all?: true;
};
export type EmployeeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeeCountAggregateInputType;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
};
export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployee[P]> : Prisma.GetScalarType<T[P], AggregateEmployee[P]>;
};
export type EmployeeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithAggregationInput | Prisma.EmployeeOrderByWithAggregationInput[];
    by: Prisma.EmployeeScalarFieldEnum[] | Prisma.EmployeeScalarFieldEnum;
    having?: Prisma.EmployeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
};
export type EmployeeGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    salary: number | null;
    companyId: string;
    createdAt: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
};
export type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
}>>;
export type EmployeeWhereInput = {
    AND?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    OR?: Prisma.EmployeeWhereInput[];
    NOT?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    id?: Prisma.StringFilter<"Employee"> | string;
    name?: Prisma.StringFilter<"Employee"> | string;
    email?: Prisma.StringFilter<"Employee"> | string;
    password?: Prisma.StringFilter<"Employee"> | string;
    phoneNumber?: Prisma.StringFilter<"Employee"> | string;
    salary?: Prisma.FloatNullableFilter<"Employee"> | number | null;
    companyId?: Prisma.StringFilter<"Employee"> | string;
    createdAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    payroll?: Prisma.PayrollListRelationFilter;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
};
export type EmployeeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    salary?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payroll?: Prisma.PayrollOrderByRelationAggregateInput;
    company?: Prisma.CompanyOrderByWithRelationInput;
};
export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    OR?: Prisma.EmployeeWhereInput[];
    NOT?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    name?: Prisma.StringFilter<"Employee"> | string;
    password?: Prisma.StringFilter<"Employee"> | string;
    phoneNumber?: Prisma.StringFilter<"Employee"> | string;
    salary?: Prisma.FloatNullableFilter<"Employee"> | number | null;
    companyId?: Prisma.StringFilter<"Employee"> | string;
    createdAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    payroll?: Prisma.PayrollListRelationFilter;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
}, "id" | "email">;
export type EmployeeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    salary?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeeCountOrderByAggregateInput;
    _avg?: Prisma.EmployeeAvgOrderByAggregateInput;
    _max?: Prisma.EmployeeMaxOrderByAggregateInput;
    _min?: Prisma.EmployeeMinOrderByAggregateInput;
    _sum?: Prisma.EmployeeSumOrderByAggregateInput;
};
export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeeScalarWhereWithAggregatesInput | Prisma.EmployeeScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeeScalarWhereWithAggregatesInput | Prisma.EmployeeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    password?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    salary?: Prisma.FloatNullableWithAggregatesFilter<"Employee"> | number | null;
    companyId?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Employee"> | Date | string;
};
export type EmployeeCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    salary?: number | null;
    createdAt?: Date | string;
    payroll?: Prisma.PayrollCreateNestedManyWithoutEmployeeInput;
    company: Prisma.CompanyCreateNestedOneWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    salary?: number | null;
    companyId: string;
    createdAt?: Date | string;
    payroll?: Prisma.PayrollUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payroll?: Prisma.PayrollUpdateManyWithoutEmployeeNestedInput;
    company?: Prisma.CompanyUpdateOneRequiredWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payroll?: Prisma.PayrollUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    salary?: number | null;
    companyId: string;
    createdAt?: Date | string;
};
export type EmployeeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeListRelationFilter = {
    every?: Prisma.EmployeeWhereInput;
    some?: Prisma.EmployeeWhereInput;
    none?: Prisma.EmployeeWhereInput;
};
export type EmployeeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmployeeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    salary?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeAvgOrderByAggregateInput = {
    salary?: Prisma.SortOrder;
};
export type EmployeeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    salary?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    salary?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeSumOrderByAggregateInput = {
    salary?: Prisma.SortOrder;
};
export type EmployeeScalarRelationFilter = {
    is?: Prisma.EmployeeWhereInput;
    isNot?: Prisma.EmployeeWhereInput;
};
export type EmployeeCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutCompanyInput, Prisma.EmployeeUncheckedCreateWithoutCompanyInput> | Prisma.EmployeeCreateWithoutCompanyInput[] | Prisma.EmployeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutCompanyInput | Prisma.EmployeeCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.EmployeeCreateManyCompanyInputEnvelope;
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
};
export type EmployeeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutCompanyInput, Prisma.EmployeeUncheckedCreateWithoutCompanyInput> | Prisma.EmployeeCreateWithoutCompanyInput[] | Prisma.EmployeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutCompanyInput | Prisma.EmployeeCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.EmployeeCreateManyCompanyInputEnvelope;
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
};
export type EmployeeUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutCompanyInput, Prisma.EmployeeUncheckedCreateWithoutCompanyInput> | Prisma.EmployeeCreateWithoutCompanyInput[] | Prisma.EmployeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutCompanyInput | Prisma.EmployeeCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.EmployeeUpsertWithWhereUniqueWithoutCompanyInput | Prisma.EmployeeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.EmployeeCreateManyCompanyInputEnvelope;
    set?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    disconnect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    delete?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    update?: Prisma.EmployeeUpdateWithWhereUniqueWithoutCompanyInput | Prisma.EmployeeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.EmployeeUpdateManyWithWhereWithoutCompanyInput | Prisma.EmployeeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.EmployeeScalarWhereInput | Prisma.EmployeeScalarWhereInput[];
};
export type EmployeeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutCompanyInput, Prisma.EmployeeUncheckedCreateWithoutCompanyInput> | Prisma.EmployeeCreateWithoutCompanyInput[] | Prisma.EmployeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutCompanyInput | Prisma.EmployeeCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.EmployeeUpsertWithWhereUniqueWithoutCompanyInput | Prisma.EmployeeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.EmployeeCreateManyCompanyInputEnvelope;
    set?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    disconnect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    delete?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    connect?: Prisma.EmployeeWhereUniqueInput | Prisma.EmployeeWhereUniqueInput[];
    update?: Prisma.EmployeeUpdateWithWhereUniqueWithoutCompanyInput | Prisma.EmployeeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.EmployeeUpdateManyWithWhereWithoutCompanyInput | Prisma.EmployeeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.EmployeeScalarWhereInput | Prisma.EmployeeScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EmployeeCreateNestedOneWithoutPayrollInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutPayrollInput, Prisma.EmployeeUncheckedCreateWithoutPayrollInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutPayrollInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateOneRequiredWithoutPayrollNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutPayrollInput, Prisma.EmployeeUncheckedCreateWithoutPayrollInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutPayrollInput;
    upsert?: Prisma.EmployeeUpsertWithoutPayrollInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeUpdateToOneWithWhereWithoutPayrollInput, Prisma.EmployeeUpdateWithoutPayrollInput>, Prisma.EmployeeUncheckedUpdateWithoutPayrollInput>;
};
export type EmployeeCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    salary?: number | null;
    createdAt?: Date | string;
    payroll?: Prisma.PayrollCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    salary?: number | null;
    createdAt?: Date | string;
    payroll?: Prisma.PayrollUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeCreateOrConnectWithoutCompanyInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutCompanyInput, Prisma.EmployeeUncheckedCreateWithoutCompanyInput>;
};
export type EmployeeCreateManyCompanyInputEnvelope = {
    data: Prisma.EmployeeCreateManyCompanyInput | Prisma.EmployeeCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutCompanyInput, Prisma.EmployeeUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutCompanyInput, Prisma.EmployeeUncheckedCreateWithoutCompanyInput>;
};
export type EmployeeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutCompanyInput, Prisma.EmployeeUncheckedUpdateWithoutCompanyInput>;
};
export type EmployeeUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.EmployeeScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateManyMutationInput, Prisma.EmployeeUncheckedUpdateManyWithoutCompanyInput>;
};
export type EmployeeScalarWhereInput = {
    AND?: Prisma.EmployeeScalarWhereInput | Prisma.EmployeeScalarWhereInput[];
    OR?: Prisma.EmployeeScalarWhereInput[];
    NOT?: Prisma.EmployeeScalarWhereInput | Prisma.EmployeeScalarWhereInput[];
    id?: Prisma.StringFilter<"Employee"> | string;
    name?: Prisma.StringFilter<"Employee"> | string;
    email?: Prisma.StringFilter<"Employee"> | string;
    password?: Prisma.StringFilter<"Employee"> | string;
    phoneNumber?: Prisma.StringFilter<"Employee"> | string;
    salary?: Prisma.FloatNullableFilter<"Employee"> | number | null;
    companyId?: Prisma.StringFilter<"Employee"> | string;
    createdAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
};
export type EmployeeCreateWithoutPayrollInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    salary?: number | null;
    createdAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateWithoutPayrollInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    salary?: number | null;
    companyId: string;
    createdAt?: Date | string;
};
export type EmployeeCreateOrConnectWithoutPayrollInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutPayrollInput, Prisma.EmployeeUncheckedCreateWithoutPayrollInput>;
};
export type EmployeeUpsertWithoutPayrollInput = {
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutPayrollInput, Prisma.EmployeeUncheckedUpdateWithoutPayrollInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutPayrollInput, Prisma.EmployeeUncheckedCreateWithoutPayrollInput>;
    where?: Prisma.EmployeeWhereInput;
};
export type EmployeeUpdateToOneWithWhereWithoutPayrollInput = {
    where?: Prisma.EmployeeWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutPayrollInput, Prisma.EmployeeUncheckedUpdateWithoutPayrollInput>;
};
export type EmployeeUpdateWithoutPayrollInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateWithoutPayrollInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeCreateManyCompanyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    salary?: number | null;
    createdAt?: Date | string;
};
export type EmployeeUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payroll?: Prisma.PayrollUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payroll?: Prisma.PayrollUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeCountOutputType = {
    payroll: number;
};
export type EmployeeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payroll?: boolean | EmployeeCountOutputTypeCountPayrollArgs;
};
export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeCountOutputTypeSelect<ExtArgs> | null;
};
export type EmployeeCountOutputTypeCountPayrollArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollWhereInput;
};
export type EmployeeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    phoneNumber?: boolean;
    salary?: boolean;
    companyId?: boolean;
    createdAt?: boolean;
    payroll?: boolean | Prisma.Employee$payrollArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    phoneNumber?: boolean;
    salary?: boolean;
    companyId?: boolean;
    createdAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    phoneNumber?: boolean;
    salary?: boolean;
    companyId?: boolean;
    createdAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    phoneNumber?: boolean;
    salary?: boolean;
    companyId?: boolean;
    createdAt?: boolean;
};
export type EmployeeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "password" | "phoneNumber" | "salary" | "companyId" | "createdAt", ExtArgs["result"]["employee"]>;
export type EmployeeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payroll?: boolean | Prisma.Employee$payrollArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type $EmployeePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Employee";
    objects: {
        payroll: Prisma.$PayrollPayload<ExtArgs>[];
        company: Prisma.$CompanyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        password: string;
        phoneNumber: string;
        salary: number | null;
        companyId: string;
        createdAt: Date;
    }, ExtArgs["result"]["employee"]>;
    composites: {};
};
export type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeePayload, S>;
export type EmployeeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeeCountAggregateInputType | true;
};
export interface EmployeeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Employee'];
        meta: {
            name: 'Employee';
        };
    };
    findUnique<T extends EmployeeFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeeFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeeFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeeCreateArgs>(args: Prisma.SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeeCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeeDeleteArgs>(args: Prisma.SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeeUpdateArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeeUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeeUpsertArgs>(args: Prisma.SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeeCountArgs>(args?: Prisma.Subset<T, EmployeeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeeCountAggregateOutputType> : number>;
    aggregate<T extends EmployeeAggregateArgs>(args: Prisma.Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;
    groupBy<T extends EmployeeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeeGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeeFieldRefs;
}
export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payroll<T extends Prisma.Employee$payrollArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employee$payrollArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeeFieldRefs {
    readonly id: Prisma.FieldRef<"Employee", 'String'>;
    readonly name: Prisma.FieldRef<"Employee", 'String'>;
    readonly email: Prisma.FieldRef<"Employee", 'String'>;
    readonly password: Prisma.FieldRef<"Employee", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"Employee", 'String'>;
    readonly salary: Prisma.FieldRef<"Employee", 'Float'>;
    readonly companyId: Prisma.FieldRef<"Employee", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Employee", 'DateTime'>;
}
export type EmployeeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeCreateInput, Prisma.EmployeeUncheckedCreateInput>;
};
export type EmployeeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeeCreateManyInput | Prisma.EmployeeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    data: Prisma.EmployeeCreateManyInput | Prisma.EmployeeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EmployeeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmployeeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeUpdateInput, Prisma.EmployeeUncheckedUpdateInput>;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeeUpdateManyMutationInput, Prisma.EmployeeUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
};
export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeUpdateManyMutationInput, Prisma.EmployeeUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
    include?: Prisma.EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmployeeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateInput, Prisma.EmployeeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeeUpdateInput, Prisma.EmployeeUncheckedUpdateInput>;
};
export type EmployeeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
};
export type Employee$payrollArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollSelect<ExtArgs> | null;
    omit?: Prisma.PayrollOmit<ExtArgs> | null;
    include?: Prisma.PayrollInclude<ExtArgs> | null;
    where?: Prisma.PayrollWhereInput;
    orderBy?: Prisma.PayrollOrderByWithRelationInput | Prisma.PayrollOrderByWithRelationInput[];
    cursor?: Prisma.PayrollWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayrollScalarFieldEnum | Prisma.PayrollScalarFieldEnum[];
};
export type EmployeeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
};
