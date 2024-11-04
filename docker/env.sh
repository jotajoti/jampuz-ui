#!/bin/sh

envFile=$SET_VITE_ENV_FILE
envConfigFile=$SET_VITE_ENV_CONFIG_FILE

# Recreate config file
rm -rf "$envConfigFile"
touch "$envConfigFile"

# Add assignment
echo "window._env = {" >> "$envConfigFile"

# Read each line in .env file
# Each line represents key=value pairs
while IFS= read -r line || [ -n "$line" ]; do
  # Split env variables by character `=`
  if echo "$line" | grep -q '='; then
    varname=$(echo "$line" | cut -d '=' -f 1)
    varvalue=$(echo "$line" | cut -d '=' -f 2-)
  fi

  # Read value of current variable if exists as Environment variable
  eval "value=\${$varname}"
  # Otherwise use value from .env file
  [ -z "$value" ] && value="$varvalue"

  # Append configuration property to JS file
  echo "    $varname: \"$value\"," >> "$envConfigFile"
done < "$envFile"

echo "};" >> "$envConfigFile"