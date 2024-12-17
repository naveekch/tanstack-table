export type AlertRule = {
  id: number;
  name: string;
  queueLimit: string;
  executionLimit: string;
  spillageLimit: string;
  tags: string[];
  warehouses: string;
};

export const alertRules: AlertRule[] = [
  {
    id: 1,
    name: "Alpha rules",
    queueLimit: "50 queries",
    executionLimit: "1 minute",
    spillageLimit: "25%",
    tags: ["33 Slingshot tags"],
    warehouses: "23 warehouses"
  },
  {
    id: 2,
    name: "Comp settings",
    queueLimit: "—",
    executionLimit: "3 hours",
    spillageLimit: "—",
    tags: ["2 Slingshot tags"],
    warehouses: "5 warehouses"
  },
  {
    id: 3,
    name: "Critical dev warehouse",
    queueLimit: "100 queries",
    executionLimit: "150 seconds",
    spillageLimit: "—",
    tags: ["1 Slingshot tag"],
    warehouses: "3 warehouses"
  },
  {
    id: 4,
    name: "Current Prod WHs alert",
    queueLimit: "10 queries",
    executionLimit: "2 hours",
    spillageLimit: "20%",
    tags: ["3 Slingshot tags"],
    warehouses: "2 warehouses"
  },
  {
    id: 5,
    name: "Dev environment limits",
    queueLimit: "110 queries",
    executionLimit: "—",
    spillageLimit: "—",
    tags: ["10 Slingshot tags"],
    warehouses: "2 warehouses"
  },
  {
    id: 6,
    name: "Production SLA monitoring",
    queueLimit: "200 queries",
    executionLimit: "30 minutes",
    spillageLimit: "15%",
    tags: ["5 Slingshot tags", "Production"],
    warehouses: "8 warehouses"
  },
  {
    id: 7,
    name: "Staging environment checks",
    queueLimit: "75 queries",
    executionLimit: "45 minutes",
    spillageLimit: "30%",
    tags: ["4 Slingshot tags", "Staging"],
    warehouses: "4 warehouses"
  },
  {
    id: 8,
    name: "QA testing limits",
    queueLimit: "150 queries",
    executionLimit: "1 hour",
    spillageLimit: "40%",
    tags: ["6 Slingshot tags", "QA"],
    warehouses: "3 warehouses"
  },
  {
    id: 9,
    name: "Beta feature monitoring",
    queueLimit: "80 queries",
    executionLimit: "20 minutes",
    spillageLimit: "35%",
    tags: ["8 Slingshot tags", "Beta"],
    warehouses: "6 warehouses"
  },
  {
    id: 10,
    name: "Performance testing",
    queueLimit: "300 queries",
    executionLimit: "2 hours",
    spillageLimit: "50%",
    tags: ["12 Slingshot tags", "Performance"],
    warehouses: "10 warehouses"
  },
  {
    id: 11,
    name: "Load balancer checks",
    queueLimit: "250 queries",
    executionLimit: "90 minutes",
    spillageLimit: "45%",
    tags: ["7 Slingshot tags", "Infrastructure"],
    warehouses: "15 warehouses"
  },
  {
    id: 12,
    name: "Database optimization",
    queueLimit: "180 queries",
    executionLimit: "40 minutes",
    spillageLimit: "25%",
    tags: ["9 Slingshot tags", "Database"],
    warehouses: "12 warehouses"
  },
  {
    id: 13,
    name: "Cache performance",
    queueLimit: "120 queries",
    executionLimit: "15 minutes",
    spillageLimit: "20%",
    tags: ["4 Slingshot tags", "Cache"],
    warehouses: "7 warehouses"
  },
  {
    id: 14,
    name: "API gateway monitoring",
    queueLimit: "160 queries",
    executionLimit: "25 minutes",
    spillageLimit: "30%",
    tags: ["11 Slingshot tags", "API"],
    warehouses: "9 warehouses"
  },
  {
    id: 15,
    name: "Microservices health",
    queueLimit: "220 queries",
    executionLimit: "35 minutes",
    spillageLimit: "40%",
    tags: ["15 Slingshot tags", "Microservices"],
    warehouses: "20 warehouses"
  },
  {
    id: 16,
    name: "Security scanning",
    queueLimit: "90 queries",
    executionLimit: "4 hours",
    spillageLimit: "15%",
    tags: ["6 Slingshot tags", "Security"],
    warehouses: "11 warehouses"
  },
  {
    id: 17,
    name: "Backup verification",
    queueLimit: "40 queries",
    executionLimit: "5 hours",
    spillageLimit: "10%",
    tags: ["3 Slingshot tags", "Backup"],
    warehouses: "14 warehouses"
  },
  {
    id: 18,
    name: "Data pipeline monitoring",
    queueLimit: "280 queries",
    executionLimit: "55 minutes",
    spillageLimit: "35%",
    tags: ["13 Slingshot tags", "Pipeline"],
    warehouses: "16 warehouses"
  },
  {
    id: 19,
    name: "ETL process checks",
    queueLimit: "200 queries",
    executionLimit: "3 hours",
    spillageLimit: "45%",
    tags: ["8 Slingshot tags", "ETL"],
    warehouses: "13 warehouses"
  },
  {
    id: 20,
    name: "Analytics processing",
    queueLimit: "350 queries",
    executionLimit: "2 hours",
    spillageLimit: "50%",
    tags: ["16 Slingshot tags", "Analytics"],
    warehouses: "18 warehouses"
  },
  {
    id: 21,
    name: "Machine learning pipeline",
    queueLimit: "400 queries",
    executionLimit: "6 hours",
    spillageLimit: "60%",
    tags: ["14 Slingshot tags", "ML"],
    warehouses: "25 warehouses"
  },
  {
    id: 22,
    name: "Real-time analytics",
    queueLimit: "175 queries",
    executionLimit: "10 minutes",
    spillageLimit: "15%",
    tags: ["9 Slingshot tags", "Real-time"],
    warehouses: "17 warehouses"
  },
  {
    id: 23,
    name: "Data lake monitoring",
    queueLimit: "450 queries",
    executionLimit: "8 hours",
    spillageLimit: "70%",
    tags: ["20 Slingshot tags", "Data Lake"],
    warehouses: "30 warehouses"
  },
  {
    id: 24,
    name: "CI/CD pipeline alerts",
    queueLimit: "60 queries",
    executionLimit: "30 minutes",
    spillageLimit: "25%",
    tags: ["5 Slingshot tags", "CI/CD"],
    warehouses: "8 warehouses"
  },
  {
    id: 25,
    name: "Network monitoring",
    queueLimit: "125 queries",
    executionLimit: "15 minutes",
    spillageLimit: "20%",
    tags: ["7 Slingshot tags", "Network"],
    warehouses: "12 warehouses"
  },
  {
    id: 26,
    name: "User activity tracking",
    queueLimit: "225 queries",
    executionLimit: "4 hours",
    spillageLimit: "40%",
    tags: ["11 Slingshot tags", "User Activity"],
    warehouses: "19 warehouses"
  },
  {
    id: 27,
    name: "Resource utilization",
    queueLimit: "275 queries",
    executionLimit: "2 hours",
    spillageLimit: "55%",
    tags: ["13 Slingshot tags", "Resources"],
    warehouses: "22 warehouses"
  },
  {
    id: 28,
    name: "Compliance monitoring",
    queueLimit: "150 queries",
    executionLimit: "12 hours",
    spillageLimit: "30%",
    tags: ["8 Slingshot tags", "Compliance"],
    warehouses: "16 warehouses"
  },
  {
    id: 29,
    name: "Error rate monitoring",
    queueLimit: "100 queries",
    executionLimit: "5 minutes",
    spillageLimit: "10%",
    tags: ["6 Slingshot tags", "Errors"],
    warehouses: "14 warehouses"
  },
  {
    id: 30,
    name: "System health checks",
    queueLimit: "325 queries",
    executionLimit: "1 hour",
    spillageLimit: "45%",
    tags: ["17 Slingshot tags", "Health"],
    warehouses: "28 warehouses"
  }
];