import { getStaffPortalByBusinessManager } from "@src/services/cards";
import { IPortalStaff } from "@src/services/cards/types";
import {
  normalizeOptionsByPublicCode,
  normalizesubOptionsByPublicCode,
} from "@utils/options";
import { useState, useEffect } from "react";

export const useOptionsByBusinessunits = (
  staffPortalId: string,
  businessUnitSigla: string,
  publicCodeParent?: string
) => {
  const [optionsData, setOptionsData] = useState<IPortalStaff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchOptionsByBusinessUnits = async () => {
      setLoading(true);
      try {
        const businessUnit = JSON.parse(businessUnitSigla || "{}");
        const newOptions = await getStaffPortalByBusinessManager(
          staffPortalId,
          businessUnit.businessUnitPublicCode
        );
        setOptionsData(newOptions);
      } catch (error) {
        console.info(error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOptionsByBusinessUnits();
  }, [businessUnitSigla]);

  const optionsCards = optionsData
    .filter((option) => normalizeOptionsByPublicCode(option.publicCode))
    .map((option) => {
      const normalizedOption = normalizeOptionsByPublicCode(option.publicCode);
      return {
        id: option.publicCode,
        label: option.abbreviatedName,
        description: option.descriptionUse,
        icon: normalizedOption?.icon || "",
        url: normalizedOption?.url || "",
      };
    });

  const subOptions = optionsData
    .filter((option) => option.publicCode === publicCodeParent)
    .flatMap((option) =>
      option.subOption.map((item) => {
        const normalizedSubOption = normalizesubOptionsByPublicCode(
          option.publicCode,
          item.publicCode
        );

        return {
          parentCode: option.publicCode,
          id: normalizedSubOption?.publicCodeOption,
          icon: normalizedSubOption?.icon,
          label: item.abbreviatedName,
          description: item.descriptionUse,
          url: normalizedSubOption?.url || "",
          domain: normalizedSubOption?.domain || "",
          crumbs: normalizedSubOption?.crumbs,
        };
      })
    );

  console.log(subOptions);

  return { optionsCards, subOptions, hasError, loading };
};
