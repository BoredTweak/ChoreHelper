ARG NEW_RELIC_API_KEY
ARG NEW_RELIC_ACCOUNT_ID

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0-bullseye-slim
WORKDIR /app
COPY --from=build-env /app/out .

HEALTHCHECK --interval=5s --timeout=10s --retries=3 CMD curl --fail http://localhost:80/healthcheck || exit 1

RUN apt update -y && apt upgrade -y
RUN apt-get install -y curl sudo
RUN curl -Ls https://download.newrelic.com/install/newrelic-cli/scripts/install.sh | bash && NEW_RELIC_API_KEY=$NEW_RELIC_API_KEY NEW_RELIC_ACCOUNT_ID=$NEW_RELIC_ACCOUNT_ID /usr/local/bin/newrelic install -n dotnet-agent-installer

EXPOSE 80
ENTRYPOINT ["dotnet", "chore-api.dll"]