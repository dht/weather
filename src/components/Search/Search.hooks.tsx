import { debounce } from '@mui/material/utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { api } from '../../api/apiWeather';
import { Json } from '../../redux/types';

export const useRemoteOptions = () => {
  const [value, setValue] = useState<any | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<readonly Json[]>([]);

  const fetch = useMemo(
    () =>
      debounce((request: { input: string }, callback: (results?: readonly any[]) => void) => {
        const { input } = request;

        api.getLocations(input).then((response: any) => {
          callback(
            response.data.map((i: any) => {
              return {
                id: i.Key,
                title: i.LocalizedName,
                item: i,
              };
            })
          );
        });
      }, 400),
    []
  );

  useEffect(() => {
    let active = true;

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results?: readonly any[]) => {
      if (active) {
        let newOptions: readonly any[] = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  const onChange = useCallback((_event: any, newValue: any | null) => {
    setOptions(newValue ? [newValue, ...options] : options);
    setValue(newValue);
  }, []);

  const onInputChange = useCallback((_event: any, newInputValue: any | null) => {
    setInputValue(newInputValue);
  }, []);

  return [value, options, { onChange, onInputChange }] as const;
};
