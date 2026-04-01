import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Moderator
 *
 */
export type ModeratorModel = runtime.Types.Result.DefaultSelection<Prisma.$ModeratorPayload>;
export type AggregateModerator = {
    _count: ModeratorCountAggregateOutputType | null;
    _avg: ModeratorAvgAggregateOutputType | null;
    _sum: ModeratorSumAggregateOutputType | null;
    _min: ModeratorMinAggregateOutputType | null;
    _max: ModeratorMaxAggregateOutputType | null;
};
export type ModeratorAvgAggregateOutputType = {
    experience: number | null;
    appointmentFee: number | null;
    averageRating: number | null;
};
export type ModeratorSumAggregateOutputType = {
    experience: number | null;
    appointmentFee: number | null;
    averageRating: number | null;
};
export type ModeratorMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    profilePhoto: string | null;
    contactNumber: string | null;
    address: string | null;
    isDeleted: boolean | null;
    deletedAt: Date | null;
    registrationNumber: string | null;
    experience: number | null;
    gender: $Enums.Gender | null;
    appointmentFee: number | null;
    qualification: string | null;
    currentWorkingPlace: string | null;
    designation: string | null;
    averageRating: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
};
export type ModeratorMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    profilePhoto: string | null;
    contactNumber: string | null;
    address: string | null;
    isDeleted: boolean | null;
    deletedAt: Date | null;
    registrationNumber: string | null;
    experience: number | null;
    gender: $Enums.Gender | null;
    appointmentFee: number | null;
    qualification: string | null;
    currentWorkingPlace: string | null;
    designation: string | null;
    averageRating: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
};
export type ModeratorCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    profilePhoto: number;
    contactNumber: number;
    address: number;
    isDeleted: number;
    deletedAt: number;
    registrationNumber: number;
    experience: number;
    gender: number;
    appointmentFee: number;
    qualification: number;
    currentWorkingPlace: number;
    designation: number;
    averageRating: number;
    createdAt: number;
    updatedAt: number;
    userId: number;
    _all: number;
};
export type ModeratorAvgAggregateInputType = {
    experience?: true;
    appointmentFee?: true;
    averageRating?: true;
};
export type ModeratorSumAggregateInputType = {
    experience?: true;
    appointmentFee?: true;
    averageRating?: true;
};
export type ModeratorMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    profilePhoto?: true;
    contactNumber?: true;
    address?: true;
    isDeleted?: true;
    deletedAt?: true;
    registrationNumber?: true;
    experience?: true;
    gender?: true;
    appointmentFee?: true;
    qualification?: true;
    currentWorkingPlace?: true;
    designation?: true;
    averageRating?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
};
export type ModeratorMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    profilePhoto?: true;
    contactNumber?: true;
    address?: true;
    isDeleted?: true;
    deletedAt?: true;
    registrationNumber?: true;
    experience?: true;
    gender?: true;
    appointmentFee?: true;
    qualification?: true;
    currentWorkingPlace?: true;
    designation?: true;
    averageRating?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
};
export type ModeratorCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    profilePhoto?: true;
    contactNumber?: true;
    address?: true;
    isDeleted?: true;
    deletedAt?: true;
    registrationNumber?: true;
    experience?: true;
    gender?: true;
    appointmentFee?: true;
    qualification?: true;
    currentWorkingPlace?: true;
    designation?: true;
    averageRating?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    _all?: true;
};
export type ModeratorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Moderator to aggregate.
     */
    where?: Prisma.ModeratorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Moderators to fetch.
     */
    orderBy?: Prisma.ModeratorOrderByWithRelationInput | Prisma.ModeratorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ModeratorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Moderators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Moderators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Moderators
    **/
    _count?: true | ModeratorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ModeratorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ModeratorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ModeratorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ModeratorMaxAggregateInputType;
};
export type GetModeratorAggregateType<T extends ModeratorAggregateArgs> = {
    [P in keyof T & keyof AggregateModerator]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModerator[P]> : Prisma.GetScalarType<T[P], AggregateModerator[P]>;
};
export type ModeratorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModeratorWhereInput;
    orderBy?: Prisma.ModeratorOrderByWithAggregationInput | Prisma.ModeratorOrderByWithAggregationInput[];
    by: Prisma.ModeratorScalarFieldEnum[] | Prisma.ModeratorScalarFieldEnum;
    having?: Prisma.ModeratorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ModeratorCountAggregateInputType | true;
    _avg?: ModeratorAvgAggregateInputType;
    _sum?: ModeratorSumAggregateInputType;
    _min?: ModeratorMinAggregateInputType;
    _max?: ModeratorMaxAggregateInputType;
};
export type ModeratorGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    profilePhoto: string | null;
    contactNumber: string | null;
    address: string | null;
    isDeleted: boolean;
    deletedAt: Date | null;
    registrationNumber: string;
    experience: number;
    gender: $Enums.Gender;
    appointmentFee: number;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
    averageRating: number;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    _count: ModeratorCountAggregateOutputType | null;
    _avg: ModeratorAvgAggregateOutputType | null;
    _sum: ModeratorSumAggregateOutputType | null;
    _min: ModeratorMinAggregateOutputType | null;
    _max: ModeratorMaxAggregateOutputType | null;
};
type GetModeratorGroupByPayload<T extends ModeratorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ModeratorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ModeratorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ModeratorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ModeratorGroupByOutputType[P]>;
}>>;
export type ModeratorWhereInput = {
    AND?: Prisma.ModeratorWhereInput | Prisma.ModeratorWhereInput[];
    OR?: Prisma.ModeratorWhereInput[];
    NOT?: Prisma.ModeratorWhereInput | Prisma.ModeratorWhereInput[];
    id?: Prisma.StringFilter<"Moderator"> | string;
    name?: Prisma.StringFilter<"Moderator"> | string;
    email?: Prisma.StringFilter<"Moderator"> | string;
    profilePhoto?: Prisma.StringNullableFilter<"Moderator"> | string | null;
    contactNumber?: Prisma.StringNullableFilter<"Moderator"> | string | null;
    address?: Prisma.StringNullableFilter<"Moderator"> | string | null;
    isDeleted?: Prisma.BoolFilter<"Moderator"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"Moderator"> | Date | string | null;
    registrationNumber?: Prisma.StringFilter<"Moderator"> | string;
    experience?: Prisma.IntFilter<"Moderator"> | number;
    gender?: Prisma.EnumGenderFilter<"Moderator"> | $Enums.Gender;
    appointmentFee?: Prisma.FloatFilter<"Moderator"> | number;
    qualification?: Prisma.StringFilter<"Moderator"> | string;
    currentWorkingPlace?: Prisma.StringFilter<"Moderator"> | string;
    designation?: Prisma.StringFilter<"Moderator"> | string;
    averageRating?: Prisma.FloatFilter<"Moderator"> | number;
    createdAt?: Prisma.DateTimeFilter<"Moderator"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Moderator"> | Date | string;
    userId?: Prisma.StringFilter<"Moderator"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ModeratorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    profilePhoto?: Prisma.SortOrderInput | Prisma.SortOrder;
    contactNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    registrationNumber?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    appointmentFee?: Prisma.SortOrder;
    qualification?: Prisma.SortOrder;
    currentWorkingPlace?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ModeratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    registrationNumber?: string;
    userId?: string;
    AND?: Prisma.ModeratorWhereInput | Prisma.ModeratorWhereInput[];
    OR?: Prisma.ModeratorWhereInput[];
    NOT?: Prisma.ModeratorWhereInput | Prisma.ModeratorWhereInput[];
    name?: Prisma.StringFilter<"Moderator"> | string;
    profilePhoto?: Prisma.StringNullableFilter<"Moderator"> | string | null;
    contactNumber?: Prisma.StringNullableFilter<"Moderator"> | string | null;
    address?: Prisma.StringNullableFilter<"Moderator"> | string | null;
    isDeleted?: Prisma.BoolFilter<"Moderator"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"Moderator"> | Date | string | null;
    experience?: Prisma.IntFilter<"Moderator"> | number;
    gender?: Prisma.EnumGenderFilter<"Moderator"> | $Enums.Gender;
    appointmentFee?: Prisma.FloatFilter<"Moderator"> | number;
    qualification?: Prisma.StringFilter<"Moderator"> | string;
    currentWorkingPlace?: Prisma.StringFilter<"Moderator"> | string;
    designation?: Prisma.StringFilter<"Moderator"> | string;
    averageRating?: Prisma.FloatFilter<"Moderator"> | number;
    createdAt?: Prisma.DateTimeFilter<"Moderator"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Moderator"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "email" | "registrationNumber" | "userId">;
export type ModeratorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    profilePhoto?: Prisma.SortOrderInput | Prisma.SortOrder;
    contactNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    registrationNumber?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    appointmentFee?: Prisma.SortOrder;
    qualification?: Prisma.SortOrder;
    currentWorkingPlace?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.ModeratorCountOrderByAggregateInput;
    _avg?: Prisma.ModeratorAvgOrderByAggregateInput;
    _max?: Prisma.ModeratorMaxOrderByAggregateInput;
    _min?: Prisma.ModeratorMinOrderByAggregateInput;
    _sum?: Prisma.ModeratorSumOrderByAggregateInput;
};
export type ModeratorScalarWhereWithAggregatesInput = {
    AND?: Prisma.ModeratorScalarWhereWithAggregatesInput | Prisma.ModeratorScalarWhereWithAggregatesInput[];
    OR?: Prisma.ModeratorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ModeratorScalarWhereWithAggregatesInput | Prisma.ModeratorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Moderator"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Moderator"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Moderator"> | string;
    profilePhoto?: Prisma.StringNullableWithAggregatesFilter<"Moderator"> | string | null;
    contactNumber?: Prisma.StringNullableWithAggregatesFilter<"Moderator"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Moderator"> | string | null;
    isDeleted?: Prisma.BoolWithAggregatesFilter<"Moderator"> | boolean;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Moderator"> | Date | string | null;
    registrationNumber?: Prisma.StringWithAggregatesFilter<"Moderator"> | string;
    experience?: Prisma.IntWithAggregatesFilter<"Moderator"> | number;
    gender?: Prisma.EnumGenderWithAggregatesFilter<"Moderator"> | $Enums.Gender;
    appointmentFee?: Prisma.FloatWithAggregatesFilter<"Moderator"> | number;
    qualification?: Prisma.StringWithAggregatesFilter<"Moderator"> | string;
    currentWorkingPlace?: Prisma.StringWithAggregatesFilter<"Moderator"> | string;
    designation?: Prisma.StringWithAggregatesFilter<"Moderator"> | string;
    averageRating?: Prisma.FloatWithAggregatesFilter<"Moderator"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Moderator"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Moderator"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"Moderator"> | string;
};
export type ModeratorCreateInput = {
    id?: string;
    name: string;
    email: string;
    profilePhoto?: string | null;
    contactNumber?: string | null;
    address?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    registrationNumber: string;
    experience?: number;
    gender?: $Enums.Gender;
    appointmentFee: number;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
    averageRating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutModeratorInput;
};
export type ModeratorUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    profilePhoto?: string | null;
    contactNumber?: string | null;
    address?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    registrationNumber: string;
    experience?: number;
    gender?: $Enums.Gender;
    appointmentFee: number;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
    averageRating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
};
export type ModeratorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    appointmentFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qualification?: Prisma.StringFieldUpdateOperationsInput | string;
    currentWorkingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutModeratorNestedInput;
};
export type ModeratorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    appointmentFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qualification?: Prisma.StringFieldUpdateOperationsInput | string;
    currentWorkingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ModeratorCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    profilePhoto?: string | null;
    contactNumber?: string | null;
    address?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    registrationNumber: string;
    experience?: number;
    gender?: $Enums.Gender;
    appointmentFee: number;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
    averageRating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
};
export type ModeratorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    appointmentFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qualification?: Prisma.StringFieldUpdateOperationsInput | string;
    currentWorkingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ModeratorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    appointmentFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qualification?: Prisma.StringFieldUpdateOperationsInput | string;
    currentWorkingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ModeratorNullableScalarRelationFilter = {
    is?: Prisma.ModeratorWhereInput | null;
    isNot?: Prisma.ModeratorWhereInput | null;
};
export type ModeratorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    profilePhoto?: Prisma.SortOrder;
    contactNumber?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    registrationNumber?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    appointmentFee?: Prisma.SortOrder;
    qualification?: Prisma.SortOrder;
    currentWorkingPlace?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ModeratorAvgOrderByAggregateInput = {
    experience?: Prisma.SortOrder;
    appointmentFee?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
};
export type ModeratorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    profilePhoto?: Prisma.SortOrder;
    contactNumber?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    registrationNumber?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    appointmentFee?: Prisma.SortOrder;
    qualification?: Prisma.SortOrder;
    currentWorkingPlace?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ModeratorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    profilePhoto?: Prisma.SortOrder;
    contactNumber?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    registrationNumber?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    appointmentFee?: Prisma.SortOrder;
    qualification?: Prisma.SortOrder;
    currentWorkingPlace?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ModeratorSumOrderByAggregateInput = {
    experience?: Prisma.SortOrder;
    appointmentFee?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
};
export type ModeratorCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ModeratorCreateWithoutUserInput, Prisma.ModeratorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ModeratorCreateOrConnectWithoutUserInput;
    connect?: Prisma.ModeratorWhereUniqueInput;
};
export type ModeratorUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ModeratorCreateWithoutUserInput, Prisma.ModeratorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ModeratorCreateOrConnectWithoutUserInput;
    connect?: Prisma.ModeratorWhereUniqueInput;
};
export type ModeratorUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ModeratorCreateWithoutUserInput, Prisma.ModeratorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ModeratorCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ModeratorUpsertWithoutUserInput;
    disconnect?: Prisma.ModeratorWhereInput | boolean;
    delete?: Prisma.ModeratorWhereInput | boolean;
    connect?: Prisma.ModeratorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModeratorUpdateToOneWithWhereWithoutUserInput, Prisma.ModeratorUpdateWithoutUserInput>, Prisma.ModeratorUncheckedUpdateWithoutUserInput>;
};
export type ModeratorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ModeratorCreateWithoutUserInput, Prisma.ModeratorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ModeratorCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ModeratorUpsertWithoutUserInput;
    disconnect?: Prisma.ModeratorWhereInput | boolean;
    delete?: Prisma.ModeratorWhereInput | boolean;
    connect?: Prisma.ModeratorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModeratorUpdateToOneWithWhereWithoutUserInput, Prisma.ModeratorUpdateWithoutUserInput>, Prisma.ModeratorUncheckedUpdateWithoutUserInput>;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ModeratorCreateWithoutUserInput = {
    id?: string;
    name: string;
    email: string;
    profilePhoto?: string | null;
    contactNumber?: string | null;
    address?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    registrationNumber: string;
    experience?: number;
    gender?: $Enums.Gender;
    appointmentFee: number;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
    averageRating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ModeratorUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    email: string;
    profilePhoto?: string | null;
    contactNumber?: string | null;
    address?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    registrationNumber: string;
    experience?: number;
    gender?: $Enums.Gender;
    appointmentFee: number;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
    averageRating?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ModeratorCreateOrConnectWithoutUserInput = {
    where: Prisma.ModeratorWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModeratorCreateWithoutUserInput, Prisma.ModeratorUncheckedCreateWithoutUserInput>;
};
export type ModeratorUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ModeratorUpdateWithoutUserInput, Prisma.ModeratorUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ModeratorCreateWithoutUserInput, Prisma.ModeratorUncheckedCreateWithoutUserInput>;
    where?: Prisma.ModeratorWhereInput;
};
export type ModeratorUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ModeratorWhereInput;
    data: Prisma.XOR<Prisma.ModeratorUpdateWithoutUserInput, Prisma.ModeratorUncheckedUpdateWithoutUserInput>;
};
export type ModeratorUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    appointmentFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qualification?: Prisma.StringFieldUpdateOperationsInput | string;
    currentWorkingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ModeratorUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    appointmentFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qualification?: Prisma.StringFieldUpdateOperationsInput | string;
    currentWorkingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ModeratorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    profilePhoto?: boolean;
    contactNumber?: boolean;
    address?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    registrationNumber?: boolean;
    experience?: boolean;
    gender?: boolean;
    appointmentFee?: boolean;
    qualification?: boolean;
    currentWorkingPlace?: boolean;
    designation?: boolean;
    averageRating?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moderator"]>;
export type ModeratorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    profilePhoto?: boolean;
    contactNumber?: boolean;
    address?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    registrationNumber?: boolean;
    experience?: boolean;
    gender?: boolean;
    appointmentFee?: boolean;
    qualification?: boolean;
    currentWorkingPlace?: boolean;
    designation?: boolean;
    averageRating?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moderator"]>;
export type ModeratorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    profilePhoto?: boolean;
    contactNumber?: boolean;
    address?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    registrationNumber?: boolean;
    experience?: boolean;
    gender?: boolean;
    appointmentFee?: boolean;
    qualification?: boolean;
    currentWorkingPlace?: boolean;
    designation?: boolean;
    averageRating?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moderator"]>;
export type ModeratorSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    profilePhoto?: boolean;
    contactNumber?: boolean;
    address?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    registrationNumber?: boolean;
    experience?: boolean;
    gender?: boolean;
    appointmentFee?: boolean;
    qualification?: boolean;
    currentWorkingPlace?: boolean;
    designation?: boolean;
    averageRating?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
};
export type ModeratorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "profilePhoto" | "contactNumber" | "address" | "isDeleted" | "deletedAt" | "registrationNumber" | "experience" | "gender" | "appointmentFee" | "qualification" | "currentWorkingPlace" | "designation" | "averageRating" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["moderator"]>;
export type ModeratorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ModeratorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ModeratorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ModeratorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Moderator";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        profilePhoto: string | null;
        contactNumber: string | null;
        address: string | null;
        isDeleted: boolean;
        deletedAt: Date | null;
        registrationNumber: string;
        experience: number;
        gender: $Enums.Gender;
        appointmentFee: number;
        qualification: string;
        currentWorkingPlace: string;
        designation: string;
        averageRating: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }, ExtArgs["result"]["moderator"]>;
    composites: {};
};
export type ModeratorGetPayload<S extends boolean | null | undefined | ModeratorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ModeratorPayload, S>;
export type ModeratorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ModeratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ModeratorCountAggregateInputType | true;
};
export interface ModeratorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Moderator'];
        meta: {
            name: 'Moderator';
        };
    };
    /**
     * Find zero or one Moderator that matches the filter.
     * @param {ModeratorFindUniqueArgs} args - Arguments to find a Moderator
     * @example
     * // Get one Moderator
     * const moderator = await prisma.moderator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModeratorFindUniqueArgs>(args: Prisma.SelectSubset<T, ModeratorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ModeratorClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Moderator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModeratorFindUniqueOrThrowArgs} args - Arguments to find a Moderator
     * @example
     * // Get one Moderator
     * const moderator = await prisma.moderator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModeratorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ModeratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModeratorClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Moderator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorFindFirstArgs} args - Arguments to find a Moderator
     * @example
     * // Get one Moderator
     * const moderator = await prisma.moderator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModeratorFindFirstArgs>(args?: Prisma.SelectSubset<T, ModeratorFindFirstArgs<ExtArgs>>): Prisma.Prisma__ModeratorClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Moderator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorFindFirstOrThrowArgs} args - Arguments to find a Moderator
     * @example
     * // Get one Moderator
     * const moderator = await prisma.moderator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModeratorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ModeratorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModeratorClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Moderators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moderators
     * const moderators = await prisma.moderator.findMany()
     *
     * // Get first 10 Moderators
     * const moderators = await prisma.moderator.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const moderatorWithIdOnly = await prisma.moderator.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ModeratorFindManyArgs>(args?: Prisma.SelectSubset<T, ModeratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Moderator.
     * @param {ModeratorCreateArgs} args - Arguments to create a Moderator.
     * @example
     * // Create one Moderator
     * const Moderator = await prisma.moderator.create({
     *   data: {
     *     // ... data to create a Moderator
     *   }
     * })
     *
     */
    create<T extends ModeratorCreateArgs>(args: Prisma.SelectSubset<T, ModeratorCreateArgs<ExtArgs>>): Prisma.Prisma__ModeratorClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Moderators.
     * @param {ModeratorCreateManyArgs} args - Arguments to create many Moderators.
     * @example
     * // Create many Moderators
     * const moderator = await prisma.moderator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ModeratorCreateManyArgs>(args?: Prisma.SelectSubset<T, ModeratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Moderators and returns the data saved in the database.
     * @param {ModeratorCreateManyAndReturnArgs} args - Arguments to create many Moderators.
     * @example
     * // Create many Moderators
     * const moderator = await prisma.moderator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Moderators and only return the `id`
     * const moderatorWithIdOnly = await prisma.moderator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ModeratorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ModeratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Moderator.
     * @param {ModeratorDeleteArgs} args - Arguments to delete one Moderator.
     * @example
     * // Delete one Moderator
     * const Moderator = await prisma.moderator.delete({
     *   where: {
     *     // ... filter to delete one Moderator
     *   }
     * })
     *
     */
    delete<T extends ModeratorDeleteArgs>(args: Prisma.SelectSubset<T, ModeratorDeleteArgs<ExtArgs>>): Prisma.Prisma__ModeratorClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Moderator.
     * @param {ModeratorUpdateArgs} args - Arguments to update one Moderator.
     * @example
     * // Update one Moderator
     * const moderator = await prisma.moderator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ModeratorUpdateArgs>(args: Prisma.SelectSubset<T, ModeratorUpdateArgs<ExtArgs>>): Prisma.Prisma__ModeratorClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Moderators.
     * @param {ModeratorDeleteManyArgs} args - Arguments to filter Moderators to delete.
     * @example
     * // Delete a few Moderators
     * const { count } = await prisma.moderator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ModeratorDeleteManyArgs>(args?: Prisma.SelectSubset<T, ModeratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Moderators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moderators
     * const moderator = await prisma.moderator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ModeratorUpdateManyArgs>(args: Prisma.SelectSubset<T, ModeratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Moderators and returns the data updated in the database.
     * @param {ModeratorUpdateManyAndReturnArgs} args - Arguments to update many Moderators.
     * @example
     * // Update many Moderators
     * const moderator = await prisma.moderator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Moderators and only return the `id`
     * const moderatorWithIdOnly = await prisma.moderator.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModeratorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ModeratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Moderator.
     * @param {ModeratorUpsertArgs} args - Arguments to update or create a Moderator.
     * @example
     * // Update or create a Moderator
     * const moderator = await prisma.moderator.upsert({
     *   create: {
     *     // ... data to create a Moderator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Moderator we want to update
     *   }
     * })
     */
    upsert<T extends ModeratorUpsertArgs>(args: Prisma.SelectSubset<T, ModeratorUpsertArgs<ExtArgs>>): Prisma.Prisma__ModeratorClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Moderators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorCountArgs} args - Arguments to filter Moderators to count.
     * @example
     * // Count the number of Moderators
     * const count = await prisma.moderator.count({
     *   where: {
     *     // ... the filter for the Moderators we want to count
     *   }
     * })
    **/
    count<T extends ModeratorCountArgs>(args?: Prisma.Subset<T, ModeratorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ModeratorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Moderator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModeratorAggregateArgs>(args: Prisma.Subset<T, ModeratorAggregateArgs>): Prisma.PrismaPromise<GetModeratorAggregateType<T>>;
    /**
     * Group by Moderator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ModeratorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ModeratorGroupByArgs['orderBy'];
    } : {
        orderBy?: ModeratorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ModeratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Moderator model
     */
    readonly fields: ModeratorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Moderator.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ModeratorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Moderator model
 */
export interface ModeratorFieldRefs {
    readonly id: Prisma.FieldRef<"Moderator", 'String'>;
    readonly name: Prisma.FieldRef<"Moderator", 'String'>;
    readonly email: Prisma.FieldRef<"Moderator", 'String'>;
    readonly profilePhoto: Prisma.FieldRef<"Moderator", 'String'>;
    readonly contactNumber: Prisma.FieldRef<"Moderator", 'String'>;
    readonly address: Prisma.FieldRef<"Moderator", 'String'>;
    readonly isDeleted: Prisma.FieldRef<"Moderator", 'Boolean'>;
    readonly deletedAt: Prisma.FieldRef<"Moderator", 'DateTime'>;
    readonly registrationNumber: Prisma.FieldRef<"Moderator", 'String'>;
    readonly experience: Prisma.FieldRef<"Moderator", 'Int'>;
    readonly gender: Prisma.FieldRef<"Moderator", 'Gender'>;
    readonly appointmentFee: Prisma.FieldRef<"Moderator", 'Float'>;
    readonly qualification: Prisma.FieldRef<"Moderator", 'String'>;
    readonly currentWorkingPlace: Prisma.FieldRef<"Moderator", 'String'>;
    readonly designation: Prisma.FieldRef<"Moderator", 'String'>;
    readonly averageRating: Prisma.FieldRef<"Moderator", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Moderator", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Moderator", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"Moderator", 'String'>;
}
/**
 * Moderator findUnique
 */
export type ModeratorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorInclude<ExtArgs> | null;
    /**
     * Filter, which Moderator to fetch.
     */
    where: Prisma.ModeratorWhereUniqueInput;
};
/**
 * Moderator findUniqueOrThrow
 */
export type ModeratorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorInclude<ExtArgs> | null;
    /**
     * Filter, which Moderator to fetch.
     */
    where: Prisma.ModeratorWhereUniqueInput;
};
/**
 * Moderator findFirst
 */
export type ModeratorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorInclude<ExtArgs> | null;
    /**
     * Filter, which Moderator to fetch.
     */
    where?: Prisma.ModeratorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Moderators to fetch.
     */
    orderBy?: Prisma.ModeratorOrderByWithRelationInput | Prisma.ModeratorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Moderators.
     */
    cursor?: Prisma.ModeratorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Moderators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Moderators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Moderators.
     */
    distinct?: Prisma.ModeratorScalarFieldEnum | Prisma.ModeratorScalarFieldEnum[];
};
/**
 * Moderator findFirstOrThrow
 */
export type ModeratorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorInclude<ExtArgs> | null;
    /**
     * Filter, which Moderator to fetch.
     */
    where?: Prisma.ModeratorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Moderators to fetch.
     */
    orderBy?: Prisma.ModeratorOrderByWithRelationInput | Prisma.ModeratorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Moderators.
     */
    cursor?: Prisma.ModeratorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Moderators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Moderators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Moderators.
     */
    distinct?: Prisma.ModeratorScalarFieldEnum | Prisma.ModeratorScalarFieldEnum[];
};
/**
 * Moderator findMany
 */
export type ModeratorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorInclude<ExtArgs> | null;
    /**
     * Filter, which Moderators to fetch.
     */
    where?: Prisma.ModeratorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Moderators to fetch.
     */
    orderBy?: Prisma.ModeratorOrderByWithRelationInput | Prisma.ModeratorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Moderators.
     */
    cursor?: Prisma.ModeratorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Moderators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Moderators.
     */
    skip?: number;
    distinct?: Prisma.ModeratorScalarFieldEnum | Prisma.ModeratorScalarFieldEnum[];
};
/**
 * Moderator create
 */
export type ModeratorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorInclude<ExtArgs> | null;
    /**
     * The data needed to create a Moderator.
     */
    data: Prisma.XOR<Prisma.ModeratorCreateInput, Prisma.ModeratorUncheckedCreateInput>;
};
/**
 * Moderator createMany
 */
export type ModeratorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moderators.
     */
    data: Prisma.ModeratorCreateManyInput | Prisma.ModeratorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Moderator createManyAndReturn
 */
export type ModeratorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * The data used to create many Moderators.
     */
    data: Prisma.ModeratorCreateManyInput | Prisma.ModeratorCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Moderator update
 */
export type ModeratorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorInclude<ExtArgs> | null;
    /**
     * The data needed to update a Moderator.
     */
    data: Prisma.XOR<Prisma.ModeratorUpdateInput, Prisma.ModeratorUncheckedUpdateInput>;
    /**
     * Choose, which Moderator to update.
     */
    where: Prisma.ModeratorWhereUniqueInput;
};
/**
 * Moderator updateMany
 */
export type ModeratorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Moderators.
     */
    data: Prisma.XOR<Prisma.ModeratorUpdateManyMutationInput, Prisma.ModeratorUncheckedUpdateManyInput>;
    /**
     * Filter which Moderators to update
     */
    where?: Prisma.ModeratorWhereInput;
    /**
     * Limit how many Moderators to update.
     */
    limit?: number;
};
/**
 * Moderator updateManyAndReturn
 */
export type ModeratorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * The data used to update Moderators.
     */
    data: Prisma.XOR<Prisma.ModeratorUpdateManyMutationInput, Prisma.ModeratorUncheckedUpdateManyInput>;
    /**
     * Filter which Moderators to update
     */
    where?: Prisma.ModeratorWhereInput;
    /**
     * Limit how many Moderators to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Moderator upsert
 */
export type ModeratorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorInclude<ExtArgs> | null;
    /**
     * The filter to search for the Moderator to update in case it exists.
     */
    where: Prisma.ModeratorWhereUniqueInput;
    /**
     * In case the Moderator found by the `where` argument doesn't exist, create a new Moderator with this data.
     */
    create: Prisma.XOR<Prisma.ModeratorCreateInput, Prisma.ModeratorUncheckedCreateInput>;
    /**
     * In case the Moderator was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ModeratorUpdateInput, Prisma.ModeratorUncheckedUpdateInput>;
};
/**
 * Moderator delete
 */
export type ModeratorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorInclude<ExtArgs> | null;
    /**
     * Filter which Moderator to delete.
     */
    where: Prisma.ModeratorWhereUniqueInput;
};
/**
 * Moderator deleteMany
 */
export type ModeratorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Moderators to delete
     */
    where?: Prisma.ModeratorWhereInput;
    /**
     * Limit how many Moderators to delete.
     */
    limit?: number;
};
/**
 * Moderator without action
 */
export type ModeratorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Moderator.d.ts.map