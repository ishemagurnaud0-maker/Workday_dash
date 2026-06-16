import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PayrollModel = runtime.Types.Result.DefaultSelection<Prisma.$PayrollPayload>;
export type AggregatePayroll = {
    _count: PayrollCountAggregateOutputType | null;
    _avg: PayrollAvgAggregateOutputType | null;
    _sum: PayrollSumAggregateOutputType | null;
    _min: PayrollMinAggregateOutputType | null;
    _max: PayrollMaxAggregateOutputType | null;
};
export type PayrollAvgAggregateOutputType = {
    amount: number | null;
};
export type PayrollSumAggregateOutputType = {
    amount: number | null;
};
export type PayrollMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    amount: number | null;
    currency: string | null;
    paymentDate: Date | null;
    createdAt: Date | null;
};
export type PayrollMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    amount: number | null;
    currency: string | null;
    paymentDate: Date | null;
    createdAt: Date | null;
};
export type PayrollCountAggregateOutputType = {
    id: number;
    employeeId: number;
    amount: number;
    currency: number;
    paymentDate: number;
    createdAt: number;
    _all: number;
};
export type PayrollAvgAggregateInputType = {
    amount?: true;
};
export type PayrollSumAggregateInputType = {
    amount?: true;
};
export type PayrollMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    amount?: true;
    currency?: true;
    paymentDate?: true;
    createdAt?: true;
};
export type PayrollMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    amount?: true;
    currency?: true;
    paymentDate?: true;
    createdAt?: true;
};
export type PayrollCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    amount?: true;
    currency?: true;
    paymentDate?: true;
    createdAt?: true;
    _all?: true;
};
export type PayrollAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollWhereInput;
    orderBy?: Prisma.PayrollOrderByWithRelationInput | Prisma.PayrollOrderByWithRelationInput[];
    cursor?: Prisma.PayrollWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PayrollCountAggregateInputType;
    _avg?: PayrollAvgAggregateInputType;
    _sum?: PayrollSumAggregateInputType;
    _min?: PayrollMinAggregateInputType;
    _max?: PayrollMaxAggregateInputType;
};
export type GetPayrollAggregateType<T extends PayrollAggregateArgs> = {
    [P in keyof T & keyof AggregatePayroll]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayroll[P]> : Prisma.GetScalarType<T[P], AggregatePayroll[P]>;
};
export type PayrollGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollWhereInput;
    orderBy?: Prisma.PayrollOrderByWithAggregationInput | Prisma.PayrollOrderByWithAggregationInput[];
    by: Prisma.PayrollScalarFieldEnum[] | Prisma.PayrollScalarFieldEnum;
    having?: Prisma.PayrollScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayrollCountAggregateInputType | true;
    _avg?: PayrollAvgAggregateInputType;
    _sum?: PayrollSumAggregateInputType;
    _min?: PayrollMinAggregateInputType;
    _max?: PayrollMaxAggregateInputType;
};
export type PayrollGroupByOutputType = {
    id: string;
    employeeId: string;
    amount: number | null;
    currency: string | null;
    paymentDate: Date;
    createdAt: Date;
    _count: PayrollCountAggregateOutputType | null;
    _avg: PayrollAvgAggregateOutputType | null;
    _sum: PayrollSumAggregateOutputType | null;
    _min: PayrollMinAggregateOutputType | null;
    _max: PayrollMaxAggregateOutputType | null;
};
export type GetPayrollGroupByPayload<T extends PayrollGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayrollGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayrollGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayrollGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayrollGroupByOutputType[P]>;
}>>;
export type PayrollWhereInput = {
    AND?: Prisma.PayrollWhereInput | Prisma.PayrollWhereInput[];
    OR?: Prisma.PayrollWhereInput[];
    NOT?: Prisma.PayrollWhereInput | Prisma.PayrollWhereInput[];
    id?: Prisma.StringFilter<"Payroll"> | string;
    employeeId?: Prisma.StringFilter<"Payroll"> | string;
    amount?: Prisma.FloatNullableFilter<"Payroll"> | number | null;
    currency?: Prisma.StringNullableFilter<"Payroll"> | string | null;
    paymentDate?: Prisma.DateTimeFilter<"Payroll"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Payroll"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type PayrollOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type PayrollWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PayrollWhereInput | Prisma.PayrollWhereInput[];
    OR?: Prisma.PayrollWhereInput[];
    NOT?: Prisma.PayrollWhereInput | Prisma.PayrollWhereInput[];
    employeeId?: Prisma.StringFilter<"Payroll"> | string;
    amount?: Prisma.FloatNullableFilter<"Payroll"> | number | null;
    currency?: Prisma.StringNullableFilter<"Payroll"> | string | null;
    paymentDate?: Prisma.DateTimeFilter<"Payroll"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Payroll"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id">;
export type PayrollOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PayrollCountOrderByAggregateInput;
    _avg?: Prisma.PayrollAvgOrderByAggregateInput;
    _max?: Prisma.PayrollMaxOrderByAggregateInput;
    _min?: Prisma.PayrollMinOrderByAggregateInput;
    _sum?: Prisma.PayrollSumOrderByAggregateInput;
};
export type PayrollScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayrollScalarWhereWithAggregatesInput | Prisma.PayrollScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayrollScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayrollScalarWhereWithAggregatesInput | Prisma.PayrollScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Payroll"> | string;
    employeeId?: Prisma.StringWithAggregatesFilter<"Payroll"> | string;
    amount?: Prisma.FloatNullableWithAggregatesFilter<"Payroll"> | number | null;
    currency?: Prisma.StringNullableWithAggregatesFilter<"Payroll"> | string | null;
    paymentDate?: Prisma.DateTimeWithAggregatesFilter<"Payroll"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Payroll"> | Date | string;
};
export type PayrollCreateInput = {
    id?: string;
    amount?: number | null;
    currency?: string | null;
    paymentDate: Date | string;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutPayrollInput;
};
export type PayrollUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    amount?: number | null;
    currency?: string | null;
    paymentDate: Date | string;
    createdAt?: Date | string;
};
export type PayrollUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutPayrollNestedInput;
};
export type PayrollUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayrollCreateManyInput = {
    id?: string;
    employeeId: string;
    amount?: number | null;
    currency?: string | null;
    paymentDate: Date | string;
    createdAt?: Date | string;
};
export type PayrollUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayrollUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayrollListRelationFilter = {
    every?: Prisma.PayrollWhereInput;
    some?: Prisma.PayrollWhereInput;
    none?: Prisma.PayrollWhereInput;
};
export type PayrollOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayrollCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayrollAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PayrollMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayrollMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayrollSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PayrollCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.PayrollCreateWithoutEmployeeInput, Prisma.PayrollUncheckedCreateWithoutEmployeeInput> | Prisma.PayrollCreateWithoutEmployeeInput[] | Prisma.PayrollUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayrollCreateOrConnectWithoutEmployeeInput | Prisma.PayrollCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.PayrollCreateManyEmployeeInputEnvelope;
    connect?: Prisma.PayrollWhereUniqueInput | Prisma.PayrollWhereUniqueInput[];
};
export type PayrollUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.PayrollCreateWithoutEmployeeInput, Prisma.PayrollUncheckedCreateWithoutEmployeeInput> | Prisma.PayrollCreateWithoutEmployeeInput[] | Prisma.PayrollUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayrollCreateOrConnectWithoutEmployeeInput | Prisma.PayrollCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.PayrollCreateManyEmployeeInputEnvelope;
    connect?: Prisma.PayrollWhereUniqueInput | Prisma.PayrollWhereUniqueInput[];
};
export type PayrollUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.PayrollCreateWithoutEmployeeInput, Prisma.PayrollUncheckedCreateWithoutEmployeeInput> | Prisma.PayrollCreateWithoutEmployeeInput[] | Prisma.PayrollUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayrollCreateOrConnectWithoutEmployeeInput | Prisma.PayrollCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.PayrollUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.PayrollUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.PayrollCreateManyEmployeeInputEnvelope;
    set?: Prisma.PayrollWhereUniqueInput | Prisma.PayrollWhereUniqueInput[];
    disconnect?: Prisma.PayrollWhereUniqueInput | Prisma.PayrollWhereUniqueInput[];
    delete?: Prisma.PayrollWhereUniqueInput | Prisma.PayrollWhereUniqueInput[];
    connect?: Prisma.PayrollWhereUniqueInput | Prisma.PayrollWhereUniqueInput[];
    update?: Prisma.PayrollUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.PayrollUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.PayrollUpdateManyWithWhereWithoutEmployeeInput | Prisma.PayrollUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.PayrollScalarWhereInput | Prisma.PayrollScalarWhereInput[];
};
export type PayrollUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.PayrollCreateWithoutEmployeeInput, Prisma.PayrollUncheckedCreateWithoutEmployeeInput> | Prisma.PayrollCreateWithoutEmployeeInput[] | Prisma.PayrollUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayrollCreateOrConnectWithoutEmployeeInput | Prisma.PayrollCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.PayrollUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.PayrollUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.PayrollCreateManyEmployeeInputEnvelope;
    set?: Prisma.PayrollWhereUniqueInput | Prisma.PayrollWhereUniqueInput[];
    disconnect?: Prisma.PayrollWhereUniqueInput | Prisma.PayrollWhereUniqueInput[];
    delete?: Prisma.PayrollWhereUniqueInput | Prisma.PayrollWhereUniqueInput[];
    connect?: Prisma.PayrollWhereUniqueInput | Prisma.PayrollWhereUniqueInput[];
    update?: Prisma.PayrollUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.PayrollUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.PayrollUpdateManyWithWhereWithoutEmployeeInput | Prisma.PayrollUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.PayrollScalarWhereInput | Prisma.PayrollScalarWhereInput[];
};
export type PayrollCreateWithoutEmployeeInput = {
    id?: string;
    amount?: number | null;
    currency?: string | null;
    paymentDate: Date | string;
    createdAt?: Date | string;
};
export type PayrollUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    amount?: number | null;
    currency?: string | null;
    paymentDate: Date | string;
    createdAt?: Date | string;
};
export type PayrollCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.PayrollWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayrollCreateWithoutEmployeeInput, Prisma.PayrollUncheckedCreateWithoutEmployeeInput>;
};
export type PayrollCreateManyEmployeeInputEnvelope = {
    data: Prisma.PayrollCreateManyEmployeeInput | Prisma.PayrollCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type PayrollUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.PayrollWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayrollUpdateWithoutEmployeeInput, Prisma.PayrollUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.PayrollCreateWithoutEmployeeInput, Prisma.PayrollUncheckedCreateWithoutEmployeeInput>;
};
export type PayrollUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.PayrollWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayrollUpdateWithoutEmployeeInput, Prisma.PayrollUncheckedUpdateWithoutEmployeeInput>;
};
export type PayrollUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.PayrollScalarWhereInput;
    data: Prisma.XOR<Prisma.PayrollUpdateManyMutationInput, Prisma.PayrollUncheckedUpdateManyWithoutEmployeeInput>;
};
export type PayrollScalarWhereInput = {
    AND?: Prisma.PayrollScalarWhereInput | Prisma.PayrollScalarWhereInput[];
    OR?: Prisma.PayrollScalarWhereInput[];
    NOT?: Prisma.PayrollScalarWhereInput | Prisma.PayrollScalarWhereInput[];
    id?: Prisma.StringFilter<"Payroll"> | string;
    employeeId?: Prisma.StringFilter<"Payroll"> | string;
    amount?: Prisma.FloatNullableFilter<"Payroll"> | number | null;
    currency?: Prisma.StringNullableFilter<"Payroll"> | string | null;
    paymentDate?: Prisma.DateTimeFilter<"Payroll"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Payroll"> | Date | string;
};
export type PayrollCreateManyEmployeeInput = {
    id?: string;
    amount?: number | null;
    currency?: string | null;
    paymentDate: Date | string;
    createdAt?: Date | string;
};
export type PayrollUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayrollUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayrollUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayrollSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    amount?: boolean;
    currency?: boolean;
    paymentDate?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payroll"]>;
export type PayrollSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    amount?: boolean;
    currency?: boolean;
    paymentDate?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payroll"]>;
export type PayrollSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    amount?: boolean;
    currency?: boolean;
    paymentDate?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payroll"]>;
export type PayrollSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    amount?: boolean;
    currency?: boolean;
    paymentDate?: boolean;
    createdAt?: boolean;
};
export type PayrollOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "amount" | "currency" | "paymentDate" | "createdAt", ExtArgs["result"]["payroll"]>;
export type PayrollInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type PayrollIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type PayrollIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $PayrollPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payroll";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        amount: number | null;
        currency: string | null;
        paymentDate: Date;
        createdAt: Date;
    }, ExtArgs["result"]["payroll"]>;
    composites: {};
};
export type PayrollGetPayload<S extends boolean | null | undefined | PayrollDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayrollPayload, S>;
export type PayrollCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayrollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayrollCountAggregateInputType | true;
};
export interface PayrollDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payroll'];
        meta: {
            name: 'Payroll';
        };
    };
    findUnique<T extends PayrollFindUniqueArgs>(args: Prisma.SelectSubset<T, PayrollFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayrollClient<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PayrollFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayrollFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayrollClient<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PayrollFindFirstArgs>(args?: Prisma.SelectSubset<T, PayrollFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayrollClient<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PayrollFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayrollFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayrollClient<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PayrollFindManyArgs>(args?: Prisma.SelectSubset<T, PayrollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PayrollCreateArgs>(args: Prisma.SelectSubset<T, PayrollCreateArgs<ExtArgs>>): Prisma.Prisma__PayrollClient<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PayrollCreateManyArgs>(args?: Prisma.SelectSubset<T, PayrollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PayrollCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayrollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PayrollDeleteArgs>(args: Prisma.SelectSubset<T, PayrollDeleteArgs<ExtArgs>>): Prisma.Prisma__PayrollClient<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PayrollUpdateArgs>(args: Prisma.SelectSubset<T, PayrollUpdateArgs<ExtArgs>>): Prisma.Prisma__PayrollClient<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PayrollDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayrollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PayrollUpdateManyArgs>(args: Prisma.SelectSubset<T, PayrollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PayrollUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayrollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PayrollUpsertArgs>(args: Prisma.SelectSubset<T, PayrollUpsertArgs<ExtArgs>>): Prisma.Prisma__PayrollClient<runtime.Types.Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PayrollCountArgs>(args?: Prisma.Subset<T, PayrollCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayrollCountAggregateOutputType> : number>;
    aggregate<T extends PayrollAggregateArgs>(args: Prisma.Subset<T, PayrollAggregateArgs>): Prisma.PrismaPromise<GetPayrollAggregateType<T>>;
    groupBy<T extends PayrollGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayrollGroupByArgs['orderBy'];
    } : {
        orderBy?: PayrollGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayrollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PayrollFieldRefs;
}
export interface Prisma__PayrollClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PayrollFieldRefs {
    readonly id: Prisma.FieldRef<"Payroll", 'String'>;
    readonly employeeId: Prisma.FieldRef<"Payroll", 'String'>;
    readonly amount: Prisma.FieldRef<"Payroll", 'Float'>;
    readonly currency: Prisma.FieldRef<"Payroll", 'String'>;
    readonly paymentDate: Prisma.FieldRef<"Payroll", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Payroll", 'DateTime'>;
}
export type PayrollFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollSelect<ExtArgs> | null;
    omit?: Prisma.PayrollOmit<ExtArgs> | null;
    include?: Prisma.PayrollInclude<ExtArgs> | null;
    where: Prisma.PayrollWhereUniqueInput;
};
export type PayrollFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollSelect<ExtArgs> | null;
    omit?: Prisma.PayrollOmit<ExtArgs> | null;
    include?: Prisma.PayrollInclude<ExtArgs> | null;
    where: Prisma.PayrollWhereUniqueInput;
};
export type PayrollFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayrollFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayrollFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayrollCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollSelect<ExtArgs> | null;
    omit?: Prisma.PayrollOmit<ExtArgs> | null;
    include?: Prisma.PayrollInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayrollCreateInput, Prisma.PayrollUncheckedCreateInput>;
};
export type PayrollCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PayrollCreateManyInput | Prisma.PayrollCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PayrollCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayrollOmit<ExtArgs> | null;
    data: Prisma.PayrollCreateManyInput | Prisma.PayrollCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PayrollIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PayrollUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollSelect<ExtArgs> | null;
    omit?: Prisma.PayrollOmit<ExtArgs> | null;
    include?: Prisma.PayrollInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayrollUpdateInput, Prisma.PayrollUncheckedUpdateInput>;
    where: Prisma.PayrollWhereUniqueInput;
};
export type PayrollUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PayrollUpdateManyMutationInput, Prisma.PayrollUncheckedUpdateManyInput>;
    where?: Prisma.PayrollWhereInput;
    limit?: number;
};
export type PayrollUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayrollOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayrollUpdateManyMutationInput, Prisma.PayrollUncheckedUpdateManyInput>;
    where?: Prisma.PayrollWhereInput;
    limit?: number;
    include?: Prisma.PayrollIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PayrollUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollSelect<ExtArgs> | null;
    omit?: Prisma.PayrollOmit<ExtArgs> | null;
    include?: Prisma.PayrollInclude<ExtArgs> | null;
    where: Prisma.PayrollWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayrollCreateInput, Prisma.PayrollUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PayrollUpdateInput, Prisma.PayrollUncheckedUpdateInput>;
};
export type PayrollDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollSelect<ExtArgs> | null;
    omit?: Prisma.PayrollOmit<ExtArgs> | null;
    include?: Prisma.PayrollInclude<ExtArgs> | null;
    where: Prisma.PayrollWhereUniqueInput;
};
export type PayrollDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollWhereInput;
    limit?: number;
};
export type PayrollDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollSelect<ExtArgs> | null;
    omit?: Prisma.PayrollOmit<ExtArgs> | null;
    include?: Prisma.PayrollInclude<ExtArgs> | null;
};
