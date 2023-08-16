<?php

namespace App\Enums;

abstract class eRespCode
{
  // Common
  const _403_NOT_AUTHORIZED = ['403_00' => 'Not Authorized'];
  const _400_BAD_REQUEST = ['400_00' => 'Bad Request'];
  const _500_INTERNAL_ERROR = ['500_00' => 'Internal Error'];
  const _520_UNKNOWN_ERROR = ['520_00' => 'Unknown Error'];
  const _200_OK = ['200_00' => 'OK'];
  const _404_NOT_FOUND = ['404_00' => 'Not Found'];

  // Product

  // 200
  const P_LISTED_200_00 = ['P200_00' => 'Products succesfully listed !'];
  const P_UPDATED_200_01 = ['P200_01' => 'Product succesfully updated !'];
  const P_DELETED_200_02 = ['P200_02' => 'Product succesfully deleted !'];
  const P_GET_200_03 = ['P200_03' => 'Product succesfully retreived !'];
  // 201
  const P_CREATED_201_00 = ['P201_00' => 'Product succesfully created !'];
  // 404
  const P_NOT_FOUND_404_00 = ['P404_00' => 'Product not found !'];

}
