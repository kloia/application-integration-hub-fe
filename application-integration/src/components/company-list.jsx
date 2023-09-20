import { Box, Typography } from "@mui/material";
import { COMPANIES_DATA } from "../data";
import { useFilterStore } from "../stores/apiStore";

export default function CompanyList() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        alignItems: "center",
      }}
    >
      {COMPANIES_DATA.map((company) => (
        <CompanyListItem key={company.id} {...company} />
      ))}
    </div>
  );
}

function CompanyListItem({
  id,
  add: addeds,
  delete: deleteds,
  update: updateds,
}) {
  const { filter } = useFilterStore();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "1rem",
      }}
    >
      <Typography sx={{ fontSize: "24px" }}>{id}</Typography>

      {(filter === "all" || filter === "added") && (
        <Box>
          <Typography
            sx={{ color: "red", fontWeight: "bold", fontSize: "24px" }}
          >
            ADDEDS
          </Typography>
          <div>
            {addeds.map((item) => (
              <div key={item.key}>
                <Typography component="span" sx={{ color: "red" }}>
                  {item.key}:
                </Typography>{" "}
                {item.value}
              </div>
            ))}
          </div>
        </Box>
      )}

      {(filter === "all" || filter === "deleted") && (
        <Box>
          <Typography
            sx={{ color: "red", fontWeight: "bold", fontSize: "24px" }}
          >
            DELETEDS
          </Typography>
          <div>
            {deleteds.map((item) => (
              <div key={item.key}>
                <Typography component="span" sx={{ color: "red" }}>
                  {item.key}:
                </Typography>{" "}
                {item.value}
              </div>
            ))}
          </div>
        </Box>
      )}

      {(filter === "all" || filter === "updated") && (
        <Box>
          <Typography
            sx={{ color: "red", fontWeight: "bold", fontSize: "24px" }}
          >
            UPDATEDS
          </Typography>
          <div>
            {updateds.map((item) => (
              <div key={item.key}>
                <Typography component="span" sx={{ color: "red" }}>
                  {item.key}:
                </Typography>{" "}
                {item.value}
              </div>
            ))}
          </div>
        </Box>
      )}
    </div>
  );
}
